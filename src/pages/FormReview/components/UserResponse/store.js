import create from 'zustand';
import { getUserReponseAsObservable } from 'services/common/userResponse';
import { BASE_URL, GET_USERS_RESPONSE, SET_SCORE, SET_MULTI_SCORE } from 'settings/constants';
import { setScoreAsObservable } from 'services/common/score';
export const useStoreFormUserResponse =  create((set) => ({
    userResponseValue: undefined,
    user_id: undefined,
    form_id: undefined,
    loading:false,
    error:null,
    complete:null,
    requestUserResponse:(formID, userID)=>{
        set({userResponseValue: undefined})
        set({form_id: formID})
        set({user_id: userID})
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
        set({refreshRespones:false});
    },
    requestSetScore:(formID, userID, questionID, score)=>{
        const url = BASE_URL + SET_SCORE
        set({loading:true});
        const data = {
            form_id: formID,
            question_id: questionID,
            student_id: userID,
            assigne_score: score
        }

        /* 
        
        {
            "assigne_scores":[]
        }

        */

        console.log("json: ",data)

        setScoreAsObservable({url:url,config:{data}}).subscribe({
            next:(data)=>{
                console.log(data);
            },
            error:({error})=>{
                console.log(error);
            },
            complete:(data)=>{
                console.log(data);
            }
        })
        set({loading:false});
    },
    requestSetMultiScore:(formID, userID, scoresData, refreshRespones)=>{
        const url = BASE_URL + SET_MULTI_SCORE
        set({loading:true});


        const dataScore = scoresData?.map((score) => {
            return {
                form_id: formID,
                question_id: score.question_id,
                student_id: userID,
                assigne_score: score.score
            }
        })

        const data = {
            assigne_scores: dataScore
        }

        console.log("json: ",data)

        setScoreAsObservable({url:url,config:{data}}).subscribe({
            next:(data)=>{
                console.log(data);
            },
            error:({error})=>{
                console.log(error);
            },
            complete:(data)=>{
                console.log(data);
                refreshRespones();
            }
        })
    }
}));
export default useStoreFormUserResponse;