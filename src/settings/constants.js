/* eslint-disable no-undef */
export const BASE_URL =
  process.env.REACT_APP_API_URL || 'http://localhost:8080/v1';
export const SEND_EXCEL = 'http://localhost:8080/v1/user/create'
  process.env.REACT_APP_SEND_EXCEL;
  export const DEFAULT_DATE = process.env.REACT_APP_DEFAULT_DATE || 'DD/MM/YYYY';
  export const DEFAULT_TIMEZONE = process.env.REACT_APP_DEFAULT_TIMEZONE;
  export const VIDEOS_SRC_URL = process.env.REACT_APP_VIDEOS_SRC_URL;

  /* LOGIN */
  export const SIGN_IN_API = process.env.REACT_APP_SIGN_IN_API;
  export const SIGN_OUT_API = process.env.REACT_APP_SIGN_OUT_API;
  
  /* USERS */
  export const GET_USERS = '/user/get';
  export const UPDATE_USER = '/user/update';
  export const UPDATE_USER_PASSWORD = '/user/update/password';
  export const GET_CAREERS = '/info/career';
  export const GET_GENDERS = '/info/gender';

