import {map} from 'rxjs/operators';
import { GET, getData, POST } from './http';

export const setScoreAsObservable = (props)=>{
    const{url,including,config} = props;  
    const source$ = getData(url,POST,config)({params:{including}}).pipe(map((x)=>{
        return {
            ...x,data:x.data || []
        };
    }));
    return source$;
};