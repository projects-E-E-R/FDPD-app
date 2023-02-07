import {SEND_ANSWERS} from 'settings/constants';
import { getFormsAsObservable } from 'services/common/forms';
import {POST} from 'services/common/http'
export const sendResponse = (form,data,timeForResponse,idUser) =>{
    const {form_id} = form;
    form?.fields?.shift();
    const bodyAnswer = {
        studedent_id:idUser,
        form_id,
        date: "2023-10-01T02:59:59.999Z",
        form_responses:form?.fields?.map(({id,type})=>{
            return {
                answers_selection_id :data[id],
                question_type:type,
                question_id: id,
            }
        }),
        time_per_section: timeForResponse?.map(({id,timeAnswared})=>{
            return {
                section_id: id,
                section_time: timeAnswared
            }
        })
    }
    getFormsAsObservable({url:SEND_ANSWERS,type:POST,config:{data:bodyAnswer}}).subscribe({
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


}
