const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  if (line === '0') {
    rl.close();
  } else {
    let num = Number(line);
    let count = 0;
    while (num >= 2) {
      num -= 2;
      count++;
    }
    console.log(count);
  }
});
