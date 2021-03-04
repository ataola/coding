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
    const len = val.length;
    const len_after_replace = val.replace(/[A-Z]/g, '').length;
    console.log(len - len_after_replace);
  }
});
