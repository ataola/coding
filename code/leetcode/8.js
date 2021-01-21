/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (s) {
  s = s.trim();
  if (!s || /[a-z]/.test(s[0])) {
    return 0;
  }
  const res = parseInt(s);
  if (!res) {
    return 0;
  }
  const min = Math.pow(-2, 31);
  const max = -min - 1;
  return res < min ? min : res > max ? max : res;
};

export default myAtoi;
