import { BASE_URL, GET_USERS } from 'settings/constants';
import { getData as getData_, GET } from 'services/common/http';

export const getData = getData_([
  { url: BASE_URL + GET_USERS, type: GET }
]);
/* data is obtained as an observable, to later be able to register and be able to analyze the data of the integrations*/
export const getUersAsObservable = () => {
    const data = getData();
    return data;
};
