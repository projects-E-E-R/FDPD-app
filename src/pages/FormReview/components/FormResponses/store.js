import create from 'zustand';
import { getUserReponseAsObservable } from 'services/common/userResponse';
import { BASE_URL, GET_FORM_RESPONSES } from 'settings/constants';
export const useStoreFormResponses =  create((set) => ({
    formResponseValue:undefined,
    formID: undefined,
    loading:false,
    error:null,
    complete:null,
    requestFormResponses:(formID)=>{
        set({formResponseValue: undefined})
        set({formID: undefined})
        const url = BASE_URL + GET_FORM_RESPONSES.replace(':formID',formID)
        set({loading:true});
        getUserReponseAsObservable({url}).subscribe({
            next:(response)=>{
                set({loading:false});
                set({formID: formID})
                if (response?.data?.forms?.length > 0) {
                set({formResponseValue:response?.data?.forms});
                } else if (response?.error) {
                  set({error:response?.error?.title})
                }
            },
            error:({error})=>{
                set({error,loading:false});
            },
            complete:(response)=>{
                set({complete:response,loading:false});
            }
        })
    }
}));
export default useStoreFormResponses;