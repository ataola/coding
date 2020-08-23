/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const map = {
    '(': -1,
    ')': 1,
    '[': -2,
    ']': 2,
    '{': -3,
    '}': 3
  }
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] < 0) {
      stack.push(s[i]);
    } else {
      const last = stack.pop();
      if (map[last] + map[s[i]] !== 0) {
        return false;
      } 
    }
  }

  if (stack.length > 0) {
    return false;
  }

  return true;
};