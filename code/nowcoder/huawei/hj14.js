const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;

let arr = [];

rl.on('line', function (line) {
  if (count === 0) {
    count = Number(line);
  } else {
    arr.push(line);
    if (count === 1) {
      arr.sort().forEach((item) => {
        console.log(item);
      });
      arr = [];
    }
    count--;
  }
});
