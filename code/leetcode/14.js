/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return '';
  }
  let cur = '';
  let res = '';
  for (let i = 0; i <= strs[0].length; i++) {
    cur = strs[0].substr(0, i);
    if (strs.every((str) => str.startsWith(cur))) {
      res = cur;
    } else {
      break;
    }
  }
  return res;
};

export default longestCommonPrefix;
