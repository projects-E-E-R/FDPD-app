import { message } from 'antd';
import { getData, PUT } from 'services/common/http';
import { getUsersAsObservable as getUsersAsObservable } from 'services/common/users';
import { BASE_URL, GET_USERS, UPDATE_USER, UPDATE_USER_PASSWORD } from 'settings/constants';
import { getUnix } from 'utils/datetime';

export const usersStoreConfig = (set) => ({
  changedAt: undefined,
  error: null,
  loading: false,
  onChange: (selection) => {
    set({ value: selection, changedAt: getUnix() });
  },
  usersData: [],
  requestData: () => {
    set({ loading: true });
    console.log(BASE_URL + GET_USERS)
    getUsersAsObservable({
      url: BASE_URL + GET_USERS
    }).subscribe({
      next: (result) => {
        const dataRequest = result?.data?.[0]?.data?.users
        set({
          error: result?.error,
          usersData: dataRequest?.length > 0
              ? dataRequest
                  ?.map(
                    ({
                        user_id,
                        first_name,
                        last_name,
                        full_name,
                        career_id,
                        RUT,
                        career,
                        gender,
                        gender_id,
                        email,
                    }) => ({
                        user_id,
                        first_name,
                        last_name,
                        full_name,
                        career_id,
                        rut: RUT,
                        career,
                        gender,
                        gender_id,
                        email,
                    })
                  )
                  .sort((a, b) =>
                    a?.first_name
                      ?.toLowerCase()
                      .localeCompare(b?.first_name?.toLowerCase())
                  )
              : [],
          value: undefined
        });
        if (!dataRequest?.length) {
          set({ changedAt: getUnix() });
        }
      },
      error: ({ error }) => {
        set({
          error,
          loading: false,
          value: undefined
        });
      },
      complete: () => {
        set({ loading: false });
      }
    });
  },
  requestUpdateData: (userData) => {
    set({ loading: true });
    console.log("update data: ",userData)
    getData(BASE_URL + UPDATE_USER, PUT, {
      data: {
        ...userData, 
        full_name: userData?.first_name + " " + userData?.last_name
    }
    })()
      .subscribe({
        next: (result) => {
          if(result?.error){
            set({
              error: result?.error.message ?? result?.error?.title,
              loading: false,
              value: undefined,
              response: null
            });
          }
          else if (result?.data) {
            set({
              response: result?.data,
              loading: false
            });
            message.success(`Datos actualizados exitosamente`);
          } else if (result?.status == 400) {
            message.error(`Ha ocurrido un error`);
            set({
              error: result?.messages,
              loading: false,
              value: undefined,
              response: null
            });
          }else if (result?.code == 'Error') {
            set({
              error: result?.error.message ?? result?.error?.title,
              loading: false,
              value: undefined,
              response: null
            });
          }
        },
        error: ({ error }) => {
          set({
            error: error,
            loading: false,
            value: undefined
          });
        },
        complete: () => {
          set({ loading: false });
        }
      });
  },
  requestResetPassword: (userEmail, password) => {
    set({ loading: true });
    getData(BASE_URL + UPDATE_USER_PASSWORD, PUT, {
      data: {
        email: userEmail,
        password: password,
    }
    })()
      .subscribe({
        next: (result) => {
          if(result?.error){
            set({
              error: result?.error.message ?? result?.error?.title,
              loading: false,
              value: undefined,
              response: null
            });
          }
          else if (result?.data) {
            message.success(`Contraseña de ${userEmail} reestablecida exitosamente`);
            set({
              response: result?.data,
              loading: false
            });
          } else if (result?.status == 400) {
            set({
              error: result?.messages,
              loading: false,
              value: undefined,
              response: null
            });
          }else if (result?.code == 'Error') {
            set({
              error: result?.error.message ?? result?.error?.title,
              loading: false,
              value: undefined,
              response: null
            });
          }
        },
        error: ({ error }) => {
          set({
            error: error,
            loading: false,
            value: undefined
          });
        },
        complete: () => {
          set({ loading: false });
        }
      });
  },
  value: undefined
});
