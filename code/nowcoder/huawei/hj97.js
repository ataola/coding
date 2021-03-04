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
    func(arr[i + 1]);
  }
});

function func(line) {
  const positive_num = [];
  const negative_num = [];
  line.split(' ').forEach((item) => {
    if (+item > 0) {
      positive_num.push(+item);
    } else if (+item < 0) {
      negative_num.push(+item);
    }
  });
  const avg =
    positive_num.length > 0
      ? positive_num.reduce((pre, cur) => pre + cur) / positive_num.length
      : 0;
  console.log(negative_num.length, avg.toFixed(1));
}
