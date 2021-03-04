const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arr = [];

rl.on('line', function (line) {
  arr.push(line.trim());
});

rl.on('close', function () {
  for (let i = 0; i < arr.length; i = i + 3) {
    if (arr[i + 2] === '0') {
      console.log(
        arr[i + 1]
          .split(' ')
          .map((item) => Number(item))
          .sort((a, b) => a - b)
          .join(' ')
      );
    } else {
      console.log(
        arr[i + 1]
          .split(' ')
          .map((item) => Number(item))
          .sort((a, b) => b - a)
          .join(' ')
      );
    }
  }
});
