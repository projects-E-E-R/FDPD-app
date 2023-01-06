export const toQueryString = (value) => {
  if (typeof value !== 'object' || !value) return '';
  const esc = encodeURIComponent;
  const result = Object.keys(value)
    .filter((x) => value[x])
    .map((x) => esc(x) + '=' + esc(value[x]))
    .join('&');
  return result;
};

export const parseJwt = (token) => {
  var base64Payload = token.split('.')[1];
  // eslint-disable-next-line no-undef
  var payload = Buffer.from(base64Payload, 'base64');
  return JSON.parse(payload.toString());
};
