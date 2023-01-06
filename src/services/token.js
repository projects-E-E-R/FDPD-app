/* eslint-disable no-unused-vars */
import Cookies from 'js-cookie';
import useAccountStore from 'store/common/account';
export const setToken = (value) => {
  Cookies.set('token', value, { secure: true, sameSite: 'strict' });
  const { setToken } = useAccountStore.getState();
  setToken(value);
};
export const setId = (value) => {
  const { setIdUser } = useAccountStore.getState();
  setIdUser(value);
};

export const getToken = () => {
  const token = Cookies.get('token');
  if (token) {
    return token;
  } else {
    const { token } = useAccountStore.getState();
    return token;
  }
};
export const getIdUser = () => {
  const id = Cookies.get('userId');
  if (id) {
    return id;
  } else {
    const { idUser } = useAccountStore.getState();
    return idUser;
  }
};
export const removeToken = () => {
  Cookies.remove('token');
  Cookies.remove('userId');
};
