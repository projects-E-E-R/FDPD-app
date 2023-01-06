import ms from 'ms';
import { BASE_URL } from './constants';

export const axiosConfig = {
  baseURL: BASE_URL,
  timeout: ms('1m'),
  responseType: 'json',
  headers: {
    Accept: 'application/json'
  }
};
