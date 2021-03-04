const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  const [n, m] = line.split(' ').map((item) => Number(item));
  console.log(func(m, n));
});

function func(m, n) {
  if (m === 0 || n === 0) {
    return 1;
  }
  return func(m, n - 1) + func(m - 1, n);
}
