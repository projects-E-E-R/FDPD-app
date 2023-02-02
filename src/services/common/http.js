import http from 'utils/http';
import { of, zip } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export const GET = 'get';
export const POST = 'post';
export const PUT = 'put';
export const DELETE = 'delete';
export const PATCH = 'patch';

/**
 * Handle the data request
 * @returns Observable
 */
export const getData =
  (url, type = GET, config) =>
  (params) => {
    return http.observable[type]({
      url,
      ...params,
      config
    }).pipe(
      catchError((error) => {
        return of(error);
      }),
      map((params) => {
        const { data, meta, error } = params;
        return {
          data: !data && !error ? params : !error ? data : null,
          meta,
          error
        };
      })
    );
  };

/**
 * Handle the data request
 * @returns Observable
 */
export const getMultiData = (urlConfig) => (params) => {
  if (!Array.isArray(urlConfig)) throw Error('Parameter is not an array');
  const arraySource$ = urlConfig.map(({ url, type, config }, index) =>
    getData(
      url,
      type,
      config
    )(Array.isArray(params) ? params[index] : { ...params })
  );
  return zip(arraySource$).pipe(
    map((result) => {
      const error = result?.find((x) => x.error);
      return { data: error ? undefined : result, error: error?.error };
    }),
    catchError((error) => {
      return of(error);
    })
  );
};
