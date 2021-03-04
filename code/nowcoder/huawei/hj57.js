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
    const num1 = BigInt(arr[i]);
    const num2 = BigInt(arr[i + 1]);
    console.log((num1 + num2).toString());
  }
});
