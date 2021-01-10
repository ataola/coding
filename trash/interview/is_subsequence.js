/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  var s_len = s.length;
  var t_len = t.length;
  var i = j = 0;
  while (i < s_len && j < t_len) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === s_len;
};

console.log(isSubsequence("abc", "ahbgdc"))