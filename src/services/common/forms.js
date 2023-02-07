import {map} from 'rxjs/operators';
import { GET_FORMS,GET_SECTIONS_FORM,GET_QUESTIONS_SECTION_FORM } from 'settings/constants';

import { GET, getData,getMultiData } from './http';

export const getFormsAsObservable = (props)=>{
    const{url,including,type,config} = props;  
    const source$ = getData(url || GET_FORMS,type,config)({params:{including}}).pipe(map((x)=>{
        return {
            ...x,data:x.data || []
        };
    }));
    return source$;
};
export const getQuestionsAsObservables = (props)=>{
    const{url,including,type,config} = props;
    //getMultiData(url)
};