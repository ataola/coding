const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let res = [];
let count = 0;

rl.on('line', function (line) {
  if (count > 0) {
    res.push(parseInt(line));
    count--;
  } else {
    if (res.length > 0) {
      res.push(parseInt(line));
      res = duplicateAndSortArray(res);
      printArray(res);
      res.length = 0;
    } else {
      count = parseInt(line) - 1;
    }
  }
});

function duplicateAndSortArray(arr) {
  return [...new Set(arr)].sort((a, b) => a - b);
}

function printArray(arr) {
  for (const item of arr) {
    console.log(item);
  }
}
