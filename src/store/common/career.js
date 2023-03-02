import { getCareerAsObservable } from 'services/common/career';
import { BASE_URL, GET_CAREERS, UPDATE_USER } from 'settings/constants';
import { getUnix } from 'utils/datetime';
import create from 'zustand';

export const useCareersStore = create((set) => ({
  changedAt: undefined,
  error: null,
  loading: false,
  onChange: (selection) => {
    set({ value: selection, changedAt: getUnix() });
  },
  careerData: [{
    career_id: 1,
    name: "Ingeniería Civil en Computación e Informática",
    value: "Ingeniería Civil en Computación e Informática",
    short_name: "ICCI",
  },
  {
    career_id: 2,
    name: "Ingeniería Civil Industrial",
    value: "Ingeniería Civil Industrial",
    short_name: "ICI"
  }],
  requestData: () => {
    set({ loading: true });
    console.log(BASE_URL + GET_CAREERS)
    getCareerAsObservable({
      url: BASE_URL + GET_CAREERS
    }).subscribe({
      next: (result) => {
        const dataRequest = result?.data?.[0]?.data?.careers
        set({
          error: result?.error,
          careerData: dataRequest?.length > 0
              ? dataRequest
                  ?.map(
                    ({
                        career_id,
                        career_name,
                        short_name,
                    }) => ({
                        id: parseInt(career_id),
                        name: career_name,
                        value: career_name,
                        short_name,
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
  getCarrerIDByName: (careers, careerName) => {
    for (let i = 0; i < careers?.length; i++) {
        if (careers[i]?.name?.match(careerName)){
            console.log(careers[i]?.career_id)
            return careers[i]?.career_id
        }
    }
  },
  value: undefined
}));
