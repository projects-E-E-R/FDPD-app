/* eslint-disable no-unused-vars */
import {
    SIGN_IN_API,SIGN_OUT_API
  } from '../settings/constants';
  import { GET, getData, POST } from './common/http';
  import { map, take, withLatestFrom } from 'rxjs';
  import { getToken, setId } from './token';
  import Cookies from 'js-cookie';
  
  export const authenticateUser = (params) => {
    const { username: email, password, remember } = params;
    const requestCredentials = getData(SIGN_IN_API, POST);
    return requestCredentials({ data: { email, password } }).pipe(
      take(1),
      map((response) => {
        const { data, error } = response;
        if (error) throw error;
        const { user_id: userId,is_admin: isAdmin} = data;
        setId(userId);
        Cookies.set('userId', userId);
        return {
          idUser:userId,
          token:userId,
          isAdmin,
          remember
        };
      })
    );
  };

  export const revokeToken = (token) => {
    const requestSignOut = getData(SIGN_OUT_API, POST);
    return requestSignOut({ data: { token } }).pipe(take(1));
  };