/* eslint-disable no-unused-vars */
import { SEND_EXCEL } from 'settings/constants';
import { getUnix } from 'utils/datetime';
import { getData, POST } from 'services/common/http';
import create from 'zustand';
import { map } from 'rxjs/operators';
const useStoreUploadExcel = create((set) => ({
  changedAt: undefined,
  cleanup: () =>
    set({
      changedAt: undefined,
      error: null,
      loading: false,
      response: null,
      value: undefined
    }),
  error: null,
  loading: false,
  onChange: (selection) => set({ value: selection, changedAt: getUnix() }),
  response: null,
  requestData: (titleExcel,userData) => {
    set({ loading: true });
    getData(SEND_EXCEL, POST, {
      data: {
        title: titleExcel,
        users: userData
      }
    })()
      .pipe(
        map((x) => {
          return {
            ...x,
            data: !Array.isArray(x.data) ? [] : x.data
          };
        })
      )
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
}));

export default useStoreUploadExcel;
