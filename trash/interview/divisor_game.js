/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
  var flag = false;
  var x = 1;
  while (N > 1) {
    if (N % x === 0) {
      flag = !flag;
      N = N - x;
    } else {
      x++;
    }
  }
  return flag;
};


console.log(divisorGame(2));
console.log(divisorGame(3));
console.log(divisorGame(4));
