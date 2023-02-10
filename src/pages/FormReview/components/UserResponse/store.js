import create from 'zustand';
import { getUserReponseAsObservable } from 'services/common/userResponse';
import { BASE_URL, GET_USERS_RESPONSE } from 'settings/constants';
export const useStoreFormUserResponse =  create((set) => ({
    userResponseValue:undefined,
    loading:false,
    error:null,
    complete:null,
    requestUserResponse:(formID, userID)=>{
        set({userResponseValue: undefined})
        const url = BASE_URL + GET_USERS_RESPONSE.replace(':formID',formID).replace(':userID',userID)
        set({loading:true});
        getUserReponseAsObservable({url}).subscribe({
            next:(response)=>{
                set({loading:false});
                if (response?.data?.form_responses?.length > 0) {
                set({userResponseValue:response?.data});
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
export default useStoreFormUserResponse;