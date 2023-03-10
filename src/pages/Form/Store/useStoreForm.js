import create from 'zustand';
import { timer } from 'rxjs';
const useStoreForm= create((set) => ({
  timeForResponse: [],
  setTimeForResponse: (formComplete,oldTimerForResponse,timerSection,sections,sectionForm) =>{
    if(formComplete){
    const sectionView = sections?.find((e)=>e?.id == sectionForm-1);
    oldTimerForResponse.push({id:sectionView?.id+1,timeAnswared:timerSection});
    set({timeForResponse:oldTimerForResponse});
    }else{
       const sectionView = sections?.find((e)=>e?.id == sectionForm-1);
    oldTimerForResponse.push({id:sectionView?.id,timeAnswared:timerSection});
    set({timeForResponse:oldTimerForResponse});
    }
  },
  section:null,
  setTimer:(section)=>{
     set({section});
  },
  formComplete:false,
  setFormComplete: (formComplete) => set({ formComplete }),
  cleanAllStoreForm:()=>
  set({
    section:null,
    formComplete:false,
    timeForResponse: []
  })
}));

export default useStoreForm;
/*  set({subscribeTimer:source});
    subscribe.unsubscribe();
*/