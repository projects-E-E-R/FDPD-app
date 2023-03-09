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
  section:null,
  setTimer:(section)=>{
     set({section});
  },
  formComplete:false,
  setFormComplete: (formComplete) => set({ formComplete }),
  cleanAllStoreForm:()=>
  set({
    subscribeTimer:null,
    formComplete:false,
    timeForResponse: []
  })
}));

export default useStoreForm;
/*  set({subscribeTimer:source});
    subscribe.unsubscribe();
*/