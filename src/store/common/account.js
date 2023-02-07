import Cookies from 'js-cookie';
import { BehaviorSubject, map, mergeMap } from 'rxjs';
import {
  authenticateUser,
  revokeToken
} from '../../services/account';
import {
  getToken,
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
        user: undefined,
        name: undefined,
        shortName: undefined,
        firstName: undefined,
        lastName: undefined,
        timezone: undefined,
        email: undefined,
        remember: undefined,
        loading: false,
        error: null,
        token: undefined,
        disableSider: false,
        idUser: undefined,
        typeUser: 'student',
        isAdmin: false,
        setDisableSider: (value) => set({ disableSider: value }),
        setUser: (value) => set({ user: value }),
        setLoading: (value) => set({ loading: value }),
        setToken: (value) => set({ token: value }),
        setError: (error) => set({ error }),
        setIdUser: (value) => set({ idUser: value }),
        setTypeUser: (value) => set({ typeUser: value }),
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
        logout: () => {
          const token = getToken();
          return revokeToken(token);
        },
        clearAll: () => {
          removeToken();
          localStorage.clear();
          set({
            user: undefined,
            name: undefined,
            shortName: undefined,
            firstName: null,
            lastName: null,
            timezone: undefined,
            email: undefined,
            remember: undefined,
            loading: false,
            error: null,
            token: undefined,
            disableSider: false,
            allowedApp: undefined,
            idUser: undefined
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
