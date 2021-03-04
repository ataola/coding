const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  solution(line);
});

function solution(str) {
  const arr = str.match(/\d+/g);
  arr.sort((a, b) => b.length - a.length);
  const max = arr[0].length;
  let res = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === max) {
      res += arr[i];
    } else {
      break;
    }
  }
  console.log(`${res},${max}`);
}
