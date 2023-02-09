import {utcToLocale} from 'utils/datetime';
import {DEFAULT_DATE,DEFAULT_TIMEZONE} from 'settings/constants';
export const getFormReMap = (value)=>{
    return value?.map(({form_date,form_id,form_title})=>{
        return {
            id:form_id,
            name:form_title,
            formDate:  utcToLocale(form_date, DEFAULT_TIMEZONE).format(`${DEFAULT_DATE} HH:mm`)
        }
    })

} 