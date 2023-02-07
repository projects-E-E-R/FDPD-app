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

export const getDataModel = ({data},{t}) => {
  const dataSource = data?.map((item) => {
        return {
            user_id: item.user_id,
            first_name: item.first_name,
            last_name: item.last_name,
            rut: item.rut,
            career: item.career,
            gender: t(`user.${item.gender}`),
            email: item.email,
            key: `user${item.user_id}`
        }
    })

    return dataSource;
}
