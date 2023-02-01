import { getUersAsObservable } from 'services/common/users';
import { BASE_URL, GET_USERS } from 'settings/constants';
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
    getUersAsObservable({
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
  value: undefined
});
