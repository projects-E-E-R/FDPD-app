import { BASE_URL, GET_CAREERS } from 'settings/constants';
import { getData as getData_, getMultiData, GET } from 'services/common/http';

export const getData = getMultiData([
  { url: GET_CAREERS, type: GET }
]);
/* data is obtained as an observable, to later be able to register and be able to analyze the data of the integrations*/
export const getCareerAsObservable = () => {
  return getData();
};
