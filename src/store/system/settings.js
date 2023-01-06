import create from 'zustand';
import { persist } from 'zustand/middleware';

const useSettingsStore = create(
  persist(
    (set) => ({
      visibility: false,
      lang: 'es',
      theme: 'default',
      decimal: 2,
      timezone: 'America/Santiago',
      fuelUnit: 'lts',
      sidebarMenuOutlinedVisibility: undefined,
      visibilityPassForgot: false,
      setVisibility: (value) => set({ visibility: value }),
      setLang: (value) => set({ lang: value }),
      setTheme: (value) => set({ theme: value }),
      setDecimal: (value) => set({ decimal: value }),
      setTimezone: (value) => set({ timezone: value }),
      setFuelUnit: (value) => set({ fuelUnit: value }),
      setSidebarMenuOutlinedVisibility: (value) =>
        set({ sidebarMenuOutlinedVisibility: value }),
      setVisibilityPassForgot: (value) => set({ visibilityPassForgot: value })
    }),
    {
      name: 'config',
      getStorage: () => localStorage
    }
  )
);

export default useSettingsStore;
