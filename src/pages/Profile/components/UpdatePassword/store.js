
import { message } from 'antd';
import { authenticateUser } from 'services/account';
import { getData, PUT } from 'services/common/http';
import { BASE_URL, UPDATE_USER_PASSWORD } from 'settings/constants';
import create from 'zustand';

export const useAccountStudentStore = create((set) => ({
    loading: false,
    error: null,
    validated: false,
    validatePassword: (username, password, remember ) => {
        set({ loading: true, error: null });
        authenticateUser({ username, password, remember })
        .subscribe({
            next: (result) => {
            if (result) {
                set({ ...result });
                set({ validated: true });
                message.success(`Validación correcta`);
            } else {
                set({
                loading: false,
                validated: false,
                error: { message: 'User not found.' }
                });
                message.error(`Validación incorrecta`);
            }
            },
            error: (error) => {
                set({ error, loading: false, validated: false })
                message.error(`Validación incorrecta`);
            },
            complete: () => set({ loading: false })
        });
    },
    requestUpdatePassword: (userEmail, password) => {
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
                message.success(`Contraseña actualizada exitosamente`);
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
}));

export default useAccountStudentStore;
