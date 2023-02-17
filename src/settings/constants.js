/* eslint-disable no-undef */
export const BASE_URL =
  process.env.REACT_APP_API_URL || 'https://fdpd.onrender.com/v1';
export const SEND_EXCEL = '/user/create'
export const DEFAULT_DATE = 'DD/MM/YYYY';
export const DEFAULT_TIMEZONE = 'America/Santiago';
  /* LOGIN */
  export const SIGN_IN_API = '/user/auth';
/* GET FORMS */
export const GET_FORMS = '/form/get';
export const GET_SECTIONS_FORM = '/form/section/';
export const GET_QUESTIONS_SECTION_FORM = '/form/questions/';
export const GET_DETAIL_FORM = '/form/';
export const SEND_ANSWERS = '/answers/input';
export const GET_HISTORY_FORMS_FROM_USER = '/answers/user';

/* USERS */
export const GET_USERS = '/user/get';
export const UPDATE_USER = '/user/update';
export const UPDATE_USER_PASSWORD = '/user/update/password';
export const GET_CAREERS = '/info/career';
export const GET_GENDERS = '/info/gender';

/* RESPONSES */
export const GET_FORM_RESPONSES = '/answers/form/:formID';
export const GET_USERS_RESPONSE = '/answers/user/:userID/:formID';
