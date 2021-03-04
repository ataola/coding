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
    console.log(arr[i].slice(0, +arr[i + 1]));
  }
});
