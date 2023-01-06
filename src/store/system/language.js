import create from 'zustand';
import { languages } from 'settings/lang';

const useLanguageStore = create((set) => ({
  options: Object.values(languages).map(({ name, nativeName }) => ({
    value: name,
    label: nativeName
  })),
  value: undefined,
  index: 1,
  error: null,
  loading: false,
  setValue: (value) => set({ value, index: languages[value].index }),
  setOptions: (options) => set({ options })
}));

export default useLanguageStore;
