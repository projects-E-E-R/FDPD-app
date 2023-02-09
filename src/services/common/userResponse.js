import { BASE_URL, GET_USERS } from 'settings/constants';
import { getData as getData_, getMultiData, GET } from 'services/common/http';

export const getData = getData_([
    { type: GET }
]);

export const getUserReponseAsObservable = (props)=>{
    const {url} = props;  
    return getData({url:url});
};