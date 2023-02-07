/* eslint-disable no-undef */
export const BASE_URL =
  process.env.REACT_APP_API_URL || 'http://localhost:8080/v1';
export const SEND_EXCEL = 'http://localhost:8080/v1/user/create'
export const DEFAULT_DATE = process.env.REACT_APP_DEFAULT_DATE || 'DD/MM/YYYY';
export const DEFAULT_TIMEZONE = process.env.REACT_APP_DEFAULT_TIMEZONE;
export const VIDEOS_SRC_URL = process.env.REACT_APP_VIDEOS_SRC_URL;

  /* LOGIN */
  export const SIGN_IN_API = 'http://localhost:8080/v1/user/auth';/* process.env.REACT_APP_SIGN_IN_API; */
  export const SIGN_OUT_API = process.env.REACT_APP_SIGN_OUT_API;
/* GET FORMS */
export const GET_FORMS = process.env.REACT_APP_GET_FORMS || 'http://localhost:8080/v1/form/get';
export const GET_SECTIONS_FORM = process.env.REACT_APP_GET_SECTIONS_FORM  || 'http://localhost:8080/v1/form/section/';
export const GET_QUESTIONS_SECTION_FORM = process.env.REACT_APP_GET_QUESTIONS_SECTION_FORM  || 'http://localhost:8080/v1/form/questions/';
export const GET_DETAIL_FORM = process.env.REACT_APP_GET_DETAIL_FORM  || 'http://localhost:8080/v1/form/';
export const SEND_ANSWERS = process.env.REACT_APP_SEND_ANSWERS  || 'http://localhost:8080/v1/answers/input';

/* USERS */
export const GET_USERS = '/user/get';
export const UPDATE_USER = '/user/update';
export const UPDATE_USER_PASSWORD = '/user/update/password';
export const GET_CAREERS = '/info/career';
export const GET_GENDERS = '/info/gender';