const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const arr = [];

rl.on('line', function (line) {
  arr.push(Number(line));
});

rl.on('close', function () {
  for (const val of arr) {
    if (val <= 2) {
      console.log(-1);
    } else if (val % 2 === 1) {
      console.log(2);
    } else if (val % 4 === 0) {
      console.log(3);
    } else {
      console.log(4);
    }
  }
});
