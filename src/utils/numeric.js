/**
 * 3 -> [1, 2, 3]
 * @param {string} range range number
 * @param {boolean} zero if true the array stars from 0
 * @returns array
 */
export const numberRange = (range, zero = false) =>
  Array(range)
    .fill(zero ? 0 : 1)
    .map((x, y) => x + y);

export const roundValue = (value, decimal, errorValue = '-') => {
  if (value === null || value === undefined) return errorValue;
  if (typeof value === 'string') value = Number(value.replaceAll(',', '.'));
  const result = parseFloat(value.toFixed(decimal)).toLocaleString('es-CL');
  return result;
};

export const isNumeric = (num) =>
  (typeof num === 'number' || (typeof num === 'string' && num.trim() !== '')) &&
  !isNaN(num);

export const randomTo = (to = 100) => {
  const rndInt = Math.floor(Math.random() * to) + 1;
  return rndInt;
};

export const compareNumber = (a, b) => (a > b) - (a < b);
