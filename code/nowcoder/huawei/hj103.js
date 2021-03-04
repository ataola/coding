const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let arr = [];
rl.on('line', function (line) {
  arr.push(line);
});

rl.on('close', function () {
  for (let i = 1; i < arr.length; i = i + 2) {
    const step = arr[i].split(' ').map((item) => Number(item));
    console.log(getMaxStep(step));
  }
});

function getMaxStep(arr) {
  const step_arr = [];
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let tmp = 0;
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && step_arr[j] > tmp) {
        tmp = step_arr[j];
      }
    }
    step_arr[i] = tmp + 1;
    if (step_arr[i] > max) {
      max = step_arr[i];
    }
  }
  return max;
}
