import axios from 'axios';
import { getToken } from 'services/token';
import useAccountStore from 'store/common/account';
const axiosInstance = (config) => {
  const instance = axios.create(config);
  instance.interceptors.request.use(function (config) {
    if (getToken()) {
      const token = getToken();
      if (!config.headers.Authorization) {
        config.headers.Authorization = token ? 'Bearer ' + token : null;
      }
      return config;
    } else {
      const token = useAccountStore.getState().token;
      if (!config.headers.Authorization) {
        config.headers.Authorization = token ? 'Bearer ' + token : null;
      }
      return config;
    }
  });

  instance.interceptors.response.use(
    (response) => {
      return { status: response.status, data: response.data };
    },
    (error) => {
      if (error.isAxiosError) {
        return Promise.reject({
          error: {
            title: error.message,
            status: error?.response?.status ?? 500,
            message:
              error?.response?.data?.title || error?.response?.data?.message
          }
        });
      }
      if (!error.message) {
        return Promise.reject(error);
      }
      if (error?.response?.status === 401) {
        useAccountStore.getState().clearAll();
      }
      return Promise.reject({
        error: {
          message: error?.message,
          statusText:
            error?.response?.data?.title ||
            error?.response?.statusText ||
            error?.message,
          status: error?.response?.status || 500
        }
      });
    }
  );

  return instance;
};

export default axiosInstance;
