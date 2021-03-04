const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arr = [];

rl.on('line', function (line) {
  arr.push(line);
});

rl.on('close', function () {
  for (let i = 0; i < arr.length; i = i + 2) {
    const num = +arr[i].trim().split(' ').slice(1);
    const res = arr[i + 1]
      .trim()
      .split(' ')
      .sort((a, b) => Number(a) - Number(b))
      .slice(0, num)
      .join(' ');
    console.log(res);
  }
});
