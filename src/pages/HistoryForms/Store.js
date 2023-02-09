import create from 'zustand';
import { getFormsAsObservable } from 'services/common/forms';
import {GET_HISTORY_FORMS_FROM_USER} from 'settings/constants';
export const useStoreHistory =  create((set) => ({
    valueFormsHistory:undefined,
    loading:false,
    error:null,
    complete:null,
    requestForm:(idUser,type)=>{
        set({loading:true});
        getFormsAsObservable({url:GET_HISTORY_FORMS_FROM_USER+'/'+idUser,type}).subscribe({
            next:(data)=>{
                set({loading:false});
                if (data?.data?.forms?.length > 0) {
                set({valueFormsHistory:data?.data?.forms});
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