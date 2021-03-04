const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  const num = parseFloat(line);
  console.log(computedCube(num).toFixed(1));
});

// xi = (2*x/3)+(n/(x*x*3));
function computedCube(num) {
  if (num === 1 || num === 0 || num === -1) {
    return num;
  }
  let a = num;
  let b = (2 * a) / 3 + num / (a * a * 3);
  while (Math.abs(b - a) > 0.00001) {
    a = b;
    b = (2 * a) / 3 + num / (a * a * 3);
  }
  return b;
}
