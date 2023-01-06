/* eslint-disable no-unused-vars */
import axios from 'axios';
import axiosSetup from './axiosSetup';
import {
  catchError,
  defer,
  mergeMap,
  Observable,
  of,
  Subject,
  switchMap,
  tap
} from 'rxjs';
import { axiosConfig } from 'settings/axios';


const axiosInstance = axiosSetup(axiosConfig);

const get = (url, queryParams) => {
  return axiosInstance.get(url, { params: queryParams });
};

const post = (url, body, queryParams) => {
  return axiosInstance.post(url, body, { params: queryParams });
};

const put = async (url, body, queryParams) => {
  return await axiosInstance
    .put(url, body, { params: queryParams })
    .map((result) => result.data);
};

const _delete = async (url, id) => {
  return await axiosInstance
    .delete(`${url}/${id}`)
    .map((result) => result.data);
};

const patch = async (url, body, queryParams) => {
  return await axiosInstance
    .patch(url, body, { params: queryParams })
    .map((result) => result.data);
};

const refreshTokenSuccess$ = new Subject();
const refreshTokenSuccessObservable$ = refreshTokenSuccess$.asObservable();

const refreshTokenFail$ = new Subject();
const refreshTokenFailObservable$ = refreshTokenFail$.asObservable();

const axiosObservable = (url, config = { method: 'get' }) => {
  return defer(() => {
    return new Observable((observer) => {
      const cancelToken = axios.CancelToken.source();
      axiosInstance(url, {
        cancelToken: cancelToken.token,
        mode: 'no-cors',
        ...config
      }).then(
        (result) => {
          observer.next?.(result.data);
          observer.complete?.();
        },
        (error) => {
          if (axios.isCancel(error)) {
            observer.complete?.();
          } else {
            observer.error?.(error);
          }
        }
      );
      return () => {
        cancelToken.cancel();
      };
    });
  }).pipe(
    catchError((error) => {
      if (error.error.status === 401) {

          catchError((error) => {
            return of(error);
          })
       
      } else {
        return of(error);
      }
    })
  );
};





const getObservable = ({ url, params, config }) =>
  axiosObservable(url, { method: 'get', params, ...config });

const postObservable = ({ url, data, params, config }) =>
  axiosObservable(url, { method: 'post', data, params, ...config });

const putObservable = ({ url, data, params, config }) =>
  axiosObservable(url, { method: 'put', data, params, ...config });

const deleteObservable = ({ url, id, config }) =>
  axiosObservable(`${url}/${id}`, { method: 'delete', ...config });

const patchObservable = ({ url, data, params, config }) =>
  axiosObservable(url, { method: 'patch', data, params, ...config });

export { get, post, put, patch };

export default {
  get,
  post,
  put,
  patch,
  delete: _delete,
  observable: {
    get: getObservable,
    post: postObservable,
    put: putObservable,
    delete: deleteObservable,
    patch: patchObservable
  }
};
