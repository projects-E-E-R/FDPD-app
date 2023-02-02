import {map} from 'rxjs/operators';
import { GET_FORMS } from 'settings/constants';
import { getData } from './http';

export const getFormsAsObservable = (props)=>{
    const{url,including,type,config} = props;
    const source$ = getData(url || GET_FORMS,type,config)({params:{including}}).pipe(map((x)=>{
        return {
            ...x,data:x.data || []
        };
    }));
    return source$;
};
