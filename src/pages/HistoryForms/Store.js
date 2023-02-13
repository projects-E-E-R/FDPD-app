import create from 'zustand';
import { getFormsAsObservable } from 'services/common/forms';
import { getUserReponseAsObservable } from 'services/common/userResponse';
import {GET_HISTORY_FORMS_FROM_USER,BASE_URL, GET_USERS_RESPONSE } from 'settings/constants';
export const useStoreHistory =  create((set) => ({
    valueFormsHistory:undefined,
    userResponseValue:undefined,
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
    },
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
export default useStoreHistory;