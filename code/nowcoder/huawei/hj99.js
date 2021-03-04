const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  console.log(CalcAutomorphicNumbers(+line));
});

function CalcAutomorphicNumbers(n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    const str = i * i;
    if (String(str).endsWith(String(i))) {
      count++;
    }
  }
  return count;
}
