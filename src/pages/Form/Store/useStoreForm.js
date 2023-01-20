import create from 'zustand';

const useStoreForm= create((set) => ({
  value: false,
  timeForResponse: [],
  setValue: (response) => set({ value:response }),
  setTimeForResponse: (response) => set({ timeForResponse:response })
}));

export default useStoreForm;
