import moment from 'moment-timezone';
import { DEFAULT_DATE, DEFAULT_TIMEZONE } from 'settings/constants';
export const DEFAULT_FORMAT = 'YYYY-MM-DDTHH:mm:ss';

/* moment.updateLocale('es', {
  week: {
    dow: 1
  }
}); */
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

export const compareDatetime = (a, b) => {
  if (a.isAfter(b)) {
    return 1;
  }
  if (a.isBefore(b)) {
    return -1;
  }
  return 0;
};
export const compareDateWithGetTime = (a, b) => {
  if (a.getTime() > b.getTime()) {
    return 1;
  }
  if (a.getTime() < b.getTime()) {
    return -1;
  }
  return 0;
};
export const betweenDatetime = (date, startDate, endDate) => {
  return date.isBetween(startDate, endDate);
};
export const transformDateToInt = (dateLocal) => {
  const [dateValues, timeValues] = dateLocal.split(' ');
  const str = dateValues;
  const [day, month, year] = str.split('/');
  const [hours, minutes, seconds] = timeValues.split(':');
  const newDate = new Date(+year, +month - 1, +day, +hours, +minutes, +seconds);
  const d1 = newDate.getTime();
  return d1;
};
export const getFormattedDate = (date) => {
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let hours = [hour, minutes, seconds].join(':');
  return day + '/' + month + '/' + year + ' ' + hours;
};
export const getDiffInHourBetweenDates = (date) => {
  const duration = moment.duration(date[1].diff(date[0]));
  const hours = parseInt(duration.asHours());
  return hours;
};
export const getDiffInMinutesBetweenDates = (date) => {
  const duration = moment.duration(date[1].diff(date[0]));
  const minutes = parseInt(duration.asMinutes()) % 60;
  return minutes;
};
export const isToday = (date, timeZone) => {
  return (
    utcToLocale(toUtc(moment()?.clone().toDate()), timeZone).format(
      'YYYY-MM-DD'
    ) == moment(date).format('YYYY-MM-DD')
  );
};
export const convertToStringDiffBetweenDates = (start, end, t) => {
  //return moment.utc(secs * 1000).format('HH:mm:ss');
  const duration = moment.duration(getMoment(end).diff(getMoment(start)));
  //const diffMilliseconds = parseInt(duration._data?.milliseconds); // milliseconds between start and end
  const diffSeconds = parseInt(duration._data?.seconds); // seconds between start and end
  const diffMinutes = parseInt(duration._data?.minutes); // minutes between start and end
  const diffHours = parseInt(duration._data?.hours); // hours between start and end
  const diffDays = parseInt(duration._data?.days); // days between start and end
  //const diffYears = parseInt(duration._data?.years); // years between start and end
  return diffDays > 0
    ? diffDays +
        ' ' +
        t('common.days') +
        ' ' +
        diffHours +
        ' ' +
        t('common.hours') +
        ' ' +
        diffMinutes +
        ' ' +
        t('common.minutes') +
        ' ' +
        diffSeconds +
        ' ' +
        t('common.seconds')
    : diffHours > 0
    ? diffHours +
      ' ' +
      t('common.hours') +
      ' ' +
      diffMinutes +
      ' ' +
      t('common.minutes') +
      ' ' +
      diffSeconds +
      ' ' +
      t('common.seconds')
    : diffMinutes > 0
    ? diffMinutes +
      ' ' +
      t('common.minutes') +
      ' ' +
      diffSeconds +
      ' ' +
      t('common.seconds')
    : diffSeconds + ' ' + t('common.seconds');
};
