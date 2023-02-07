import Cookies from 'js-cookie';
import { BehaviorSubject, map, mergeMap } from 'rxjs';
import {
  authenticateUser
} from '../../services/account';
import {
  removeToken,
  setToken as tokenCookies
} from '../../services/token';
import create from 'zustand';
import { persist } from 'zustand/middleware';

export const session$ = new BehaviorSubject();
export const sessionObservable$ = session$.asObservable();

const useAccountStore = create(
  persist(
    (set) => {
      return {
        timezone: undefined,
        email: undefined,
        remember: undefined,
        loading: false,
        error: null,
        token: undefined,
        disableSider: false,
        idUser: undefined,
        isAdmin: false,
        setDisableSider: (value) => set({ disableSider: value }),
        setLoading: (value) => set({ loading: value }),
        setToken: (value) => set({ token: value }),
        setError: (error) => set({ error }),
        setIdUser: (value) => set({ idUser: value }),
        authenticate: ({ username, password, remember }) => {
          set({ loading: true, error: null });
          authenticateUser({ username, password, remember })
            .subscribe({
              next: (result) => {
                if (result) {
                  const { token, ...rest } = result;
                  set({ ...result });
                  tokenCookies(token);
                  session$.next(rest);
                  Cookies.set('timezone', rest.timezone);
                } else {
                  set({
                    loading: false,
                    error: { message: 'User not found.' }
                  });
                }
              },
              error: (error) => set({ error, loading: false }),
              complete: () => set({ loading: false })
            });
        },
        clearAll: () => {
          removeToken();
          localStorage.clear();
          set({
            timezone: undefined,
            email: undefined,
            remember: undefined,
            loading: false,
            error: null,
            token: undefined,
            disableSider: false,
            idUser: undefined,
            isAdmin: false,
          });
          session$.next(null);
        }
      };
    },
    {
      name: 'account',
      getStorage: () => localStorage
    }
  )
);

export default useAccountStore;
