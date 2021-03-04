const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  const [total, cur] = solution(+line, 5);
  console.log(total);
  console.log(cur);
});

function solution(height, count) {
  let total = 0;
  let cur = height;
  while (count > 0) {
    total = total + cur * 1.5;
    cur = cur / 2;
    count--;
  }
  total = total - cur;
  return [total, cur];
}
