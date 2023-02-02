import create from 'zustand';
import { timer } from 'rxjs';
const useStoreForm= create((set) => ({
  timeForResponse: [],
  setTimeForResponse: (oldTimerForResponse,timerSection,sections,sectionForm) =>{
    const sectionView = sections?.find((e)=>e?.id == sectionForm-1);
    oldTimerForResponse.push({id:sectionView?.id,timeAnswared:timerSection});
    set({timeForResponse:oldTimerForResponse});
  },
  subscribeTimer:null,
  setTimer:()=>{
    const source = timer(1000,1000);
    set({subscribeTimer:source});
  },
  formComplete:false,
  setFormComplete: (formComplete) => set({ formComplete })
}));

export default useStoreForm;
/*  set({subscribeTimer:source});
    subscribe.unsubscribe();
*/