/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  var res = '';
  var arr = s.split(' ');
  for (var i = 0; i < arr.length; i++) {
    for (var j = arr[i].length - 1; j >= 0; j--) {
      res += arr[i][j];
    }
    res += ' ';
  }
  return res.slice(0, -1);
};

console.log(reverseWords("Let's take LeetCode contest"))