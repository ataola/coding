const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  console.log(fib(Number(line)));
});

function fib(n) {
  if (n < 3) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}
