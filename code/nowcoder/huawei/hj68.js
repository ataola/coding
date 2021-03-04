const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = -1;
let order = '0';
let is_order = false;
const arr = [];

rl.on('line', function (line) {
  if (count === -1) {
    count = +line;
    is_order = true;
    arr.length = 0;
  } else {
    if (count === 0) {
      const [key, value] = line.split(' ');
      arr.push([key, +value]);
      solution(arr, order);
    }
    if (is_order) {
      order = line;
      is_order = false;
    } else {
      const [key, value] = line.split(' ');
      arr.push([key, +value]);
    }
    count--;
  }
});

function solution(arr, order) {
  if (order === '0') {
    arr.sort((a, b) => b[1] - a[1]);
  } else {
    arr.sort((a, b) => a[1] - b[1]);
  }
  for (const val of arr) {
    console.log(`${val[0]} ${val[1]}`);
  }
}
