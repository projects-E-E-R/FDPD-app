import create from 'zustand';
import { getFormsAsObservable } from 'services/common/forms';
export const useStoreHistory =  create((set) => ({
    valueForms:undefined,
    loading:false,
    error:null,
    complete:null,
    requestForm:(url,type)=>{
        set({loading:true});
        getFormsAsObservable({url,type}).subscribe({
            next:(data)=>{
                set({loading:false});
                if (data?.data?.forms?.length > 0) {
                set({valueForms:data?.data?.forms});
                } else if (data?.error) {
                  set({error:data?.error?.title})
                }
            },
            error:({error})=>{
                set({error,loading:false});
            },
            complete:(data)=>{
                set({complete:data,loading:false});
            }
        })
    }
}));
export default useStoreHistory;