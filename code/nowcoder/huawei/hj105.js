const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const negative_arr = [];
const positive_arr = [];

rl.on('line', function (line) {
  const num = Number(line);
  if (num >= 0) {
    positive_arr.push(num);
  } else if (num < 0) {
    negative_arr.push(num);
  }
});

rl.on('close', function () {
  console.log(negative_arr.length);
  let avg = 0;
  if (positive_arr.length) {
    avg = positive_arr.reduce((pre, cur) => pre + cur) / positive_arr.length;
  }
  console.log(avg.toFixed(1));
});
