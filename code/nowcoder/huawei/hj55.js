const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  const range = +line;
  if (range < 7) {
    console.log(0);
  } else {
    let count = 0;
    for (let i = 7; i <= range; i++) {
      if (i % 7 === 0 || /7+/g.test(i.toString())) {
        count++;
      }
    }
    console.log(count);
  }
});
