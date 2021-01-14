/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
    const obj = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    let res = 0;
    if (s.length === 1) {
      res = obj[s]
    } else {
      for (let i =0; i < s.length; i++) {
        if (obj[s[i]] < obj[s[i + 1]]) {
          res = res + obj[s[i + 1]] - obj[s[i]];
          i++;
        } else {
          res = res + obj[s[i]];
        }
      }
    }
    return res;
  };
  
  export default romanToInt;