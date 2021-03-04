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
  for (const val of arr) {
    if (val) {
      console.log(getMaxSonString(val));
    }
  }
});

function getMaxSonString(line) {
  const arr = [];
  let count = 0;
  for (let i = 0; i < line.length; i++) {
    let left = i;
    for (let right = i + 1; right < line.length; right++) {
      if (left >= 0 && right <= line.length && line[left] === line[right]) {
        count += 2;
        left--;
      } else {
        if (count) {
          arr.push(count);
          count = 0;
          break;
        }
      }
    }
  }
  return arr.length === 0 ? 0 : Math.max.apply(null, arr);
}
