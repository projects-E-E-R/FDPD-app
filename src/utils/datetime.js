import moment from 'moment-timezone';
import { DEFAULT_DATE, DEFAULT_TIMEZONE } from 'settings/constants';
export const DEFAULT_FORMAT = 'YYYY-MM-DDTHH:mm:ss';

moment.defineLocale('es', { week: { dow: 1 } });
export const today = () => moment();

export const getCurrentYear = () => today().year();

export const getMoment = (value, format = DEFAULT_FORMAT) =>
  moment(value, format);

export const utcToLocale = (value, timezone = DEFAULT_TIMEZONE) => {
  const utc = toUtc(value);
  const locale = moment.tz(utc, DEFAULT_FORMAT, timezone);
  return locale;
};

export const getDate = (format = DEFAULT_DATE) => today().format(format);

export const getTimezoneList = () => moment.tz.names();

export const toUtc = (value) => moment.utc(value);

export const isValidDate = (value, format = DEFAULT_FORMAT) =>
  moment(value, format, true).isValid();

export const getUnix = () => today().unix();

