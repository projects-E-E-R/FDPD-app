/* eslint-disable no-unused-vars */
import {
    SIGN_IN_API
  } from '../settings/constants';
  import {  getData, POST } from './common/http';
  import { map, take } from 'rxjs';
  import {  setId } from './token';
  import Cookies from 'js-cookie';
  
  export const authenticateUser = (params) => {
    const { username: email, password, remember } = params;
    const requestCredentials = getData(SIGN_IN_API, POST);
    return requestCredentials({ data: { email, password } }).pipe(
      take(1),
      map((response) => {
        const { data, error } = response;
        if (error) throw error;
        const { user_id: userId,is_admin: isAdmin,career,
          career_id:careerId,email,first_name:firstName,full_name:fullName,
          gender,gender_id:genderId,last_name:lastName,RUT:rut
        } = data;
        setId(userId);
        Cookies.set('userId', userId);
        return {
          idUser:userId,
          token:userId,
          isAdmin,
          career,
          careerId,
          email,
          firstName,fullName,gender,
          genderId,
          lastName,
          rut,
          remember
        };
      })
    );
  };
