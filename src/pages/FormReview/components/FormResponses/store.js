import create from 'zustand';
import { getUserReponseAsObservable } from 'services/common/userResponse';
import { BASE_URL, GET_ALL_USERS_RESPONSE, GET_FORM_RESPONSES } from 'settings/constants';
import { GET, getData, POST } from 'services/common/http'
export const useStoreFormResponses =  create((set) => ({
    formResponseValue:undefined,
    formID: undefined,
    usersIds: undefined,
    loading:false,
    loadingAllResponses:false,
    allUserResponseValue: undefined,
    error:null,
    complete:null,
    requestFormResponses:(formID)=>{
        set({formResponseValue: undefined})
        set({formID: undefined})
        const url = BASE_URL + GET_FORM_RESPONSES.replace(':formID',formID)
        set({loading:true});
        getUserReponseAsObservable({url, type: GET}).subscribe({
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
    },
    requestAllUserResponse:(formID, userIDs)=>{
        set({userResponseValue: undefined})
        set({formID: formID})
        set({usersIds: userIDs})
        const url = BASE_URL + GET_ALL_USERS_RESPONSE
        set({loadingAllResponses:true});
        const data = {
            users: [
                {
                user_id: 15,
                form_id: 1
                },
                {
                user_id: 16,
                form_id: 1
                },
                {
                user_id: 83,
                form_id: 1
                },
                {
                user_id: 196,
                form_id: 1
                }
            ]
        }
        getData(BASE_URL + GET_ALL_USERS_RESPONSE, POST, {
              data
          }
          )().subscribe({
            next:(response)=>{
                set({loadingAllResponses:false});
                if (response?.data?.length > 0) {
                set({allUserResponseValue: response?.data});
                } else if (response?.error) {
                  set({error:response?.error?.title})
                }
            },
            error:({error})=>{
                set({error,loadingAllResponses:false});
            },
            complete:(response)=>{
                set({complete:response,loadingAllResponses:false});
            }
        })
        set({refreshRespones:false});
    },
}));
export default useStoreFormResponses;