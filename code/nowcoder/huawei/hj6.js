const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  const res = [];
  let num = parseInt(line);
  for (let i = 2; i * i <= num; i++) {
    while (num % i === 0) {
      res.push(i);
      num = num / i;
    }
  }
  if (num > 1) {
    res.push(num);
  }
  console.log(res.join(' ') + ' ');
});
