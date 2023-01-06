import create from 'zustand';
import { themes } from 'settings/theme';

const useThemeStore = create((set) => ({
  options: Object.values(themes).map(({ name, value }) => ({
    value: name,
    label: value.name
  })),
  value: undefined,
  error: null,
  loading: false,
  setValue: (value) => set({ value }),
  setOptions: (options) => set({ options })
}));

export default useThemeStore;
