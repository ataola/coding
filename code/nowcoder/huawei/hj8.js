const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let obj = {};
let count = 0;

rl.on('line', function (line) {
  if (count === 0) {
    count = Number(line);
  } else {
    const [key, val] = line.split(' ');
    obj[key] = obj[key] ? obj[key] + Number(val) : Number(val);
    if (count === 1) {
      for (const key in obj) {
        console.log(key, obj[key]);
      }
      obj = {};
    }
    count--;
  }
});
