const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const left = /^A\d+$/;
const right = /^D\d+$/;
const up = /^W\d+$/;
const down = /^S\d+$/;

rl.on('line', function (line) {
  const line_arr = line.split(';');
  let x = 0;
  let y = 0;
  for (const item of line_arr) {
    if (left.test(item)) {
      x -= Number(item.slice(1));
    } else if (right.test(item)) {
      x += Number(item.slice(1));
    } else if (up.test(item)) {
      y += Number(item.slice(1));
    } else if (down.test(item)) {
      y -= Number(item.slice(1));
    }
  }
  console.log(`${x},${y}`);
});
