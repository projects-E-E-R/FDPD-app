import { getCareerAsObservable } from 'services/common/career';
import { BASE_URL, GET_GENDERS } from 'settings/constants';
import { getUnix } from 'utils/datetime';
import create from 'zustand';

export const useGendersStore = create((set) => ({
  changedAt: undefined,
  error: null,
  loading: false,
  onChange: (selection) => {
    set({ value: selection, changedAt: getUnix() });
  },
  genderData: [{
    gender_id: 1,
    name: "Masculino",
    value: "Masculino",
    char: "M",
  },
  {
    gender_id: 2,
    name: "Femenino",
    value: "Femenino",
    char: "F",
  },],
  requestData: () => {
    set({ loading: true });
    console.log(BASE_URL + GET_GENDERS)
    getCareerAsObservable({
      url: BASE_URL + GET_GENDERS
    }).subscribe({
      next: (result) => {
        const dataRequest = result?.data?.[0]?.data?.users
        set({
          error: result?.error,
          careerData: dataRequest?.length > 0
              ? dataRequest
                  ?.map(
                    ({
                        gender_id,
                        name,
                    }) => ({
                        gender_id,
                        name,
                    })
                  )
                  .sort((a, b) =>
                    a?.name
                      ?.toLowerCase()
                      .localeCompare(b?.name?.toLowerCase())
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
  getGenderIDByName: (genders, genderName) => {
    for (let i = 0; i < genders?.length; i++) {
        if (genders[i]?.name?.match(genderName)){
            console.log(genders[i]?.gender_id)
            return genders[i]?.gender_id
        }
    }
  },
  value: undefined
}));
