import Cookies from 'js-cookie';
import { getTimezoneList } from 'utils/datetime';
import create from 'zustand';

const useTimezoneStore = create((set) => ({
  options: getTimezoneList().map((item) => ({
    value: item,
    label: item.replaceAll('_', ' ')
  })),
  value: undefined,
  error: null,
  loading: false,
  setValue: (value) => {
    set({ value });
    Cookies.set('timezone', value);
  },
  setOptions: (options) => set({ options })
}));

export default useTimezoneStore;
