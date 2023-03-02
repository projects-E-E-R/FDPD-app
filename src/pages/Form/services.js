import {SEND_ANSWERS} from 'settings/constants';
import { getFormsAsObservable } from 'services/common/forms';
import {POST} from 'services/common/http'
import {today,toUtc} from 'utils/datetime';
import { message } from 'antd';
const getId = (options,label)=>{
    let result = options?.find((e)=>e?.label == label);
    return parseInt(result?.id);
  }
export const sendResponse = (form,data,timeForResponse,idUser,setLoading) =>{
    const {form_id} = form;
    let todayDate = today();
    const dateUtc = toUtc(todayDate).format(
        'YYYY-MM-DD HH:mm:00'
      );
    let editDate = dateUtc.split(' ');
    let date = editDate[0] + 'T' + editDate[1] + '.000Z';
 
    const bodyAnswer = {
        student_id:idUser,
        form_id,
        date,
        form_responses:form?.fields?.map(({id,type,options})=>{
            if(type == 'SHORT_ANSWER'){
                return {
                    answers_short_question: data[id],
                    question_type:type,
                    question_id: parseInt(id),
                }
            }else if(type == 'LINEAR'){
                return {
                    answers_item_id:  getId(options,data[id]),
                    question_type:type,
                    question_id: parseInt(id),
                }
            }
            else{
                return {
                    answers_selection_id :type == 'RADIO' && options ? getId(options,data[id]) : parseInt(data[id]),
                    question_type:type,
                    question_id: parseInt(id),
                }
            }

        }),
        time_per_section: timeForResponse?.map(({id,timeAnswared})=>{
            return {
                section_id: id,
                section_time: timeAnswared
            }
        })
    }
    setLoading(true);
    getFormsAsObservable({url:SEND_ANSWERS,type:POST,config:{data:bodyAnswer}}).subscribe({
        next:(data)=>{
            setLoading(false);
            if(data?.data?.code  == 201){
                message.success(`Respuestas enviadas correctamente`);
            }else{
                message.error(data?.data?.error?.title ?? `Error al enviar sus respuestas, vuelve a responder por favor`);
            }
        },
        error:({error})=>{
            setLoading(false);
            message.error(error ?? `Error al subir el archivo`);
        },
        complete:()=>{
            setLoading(false);
        }
    })


}
