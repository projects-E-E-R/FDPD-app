export const buildError = (error) => ({
  title: error?.message === error?.statusText ? 'Error' : error?.message,
  message: error?.statusText || '',
  status: error?.status || 500
});
