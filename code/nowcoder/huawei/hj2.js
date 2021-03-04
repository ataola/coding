const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arr = [];

rl.on('line', function (line) {
  arr.push(line);
  if (arr.length === 2) {
    console.log(calculateCount(arr[0], arr[1]));
    arr.length = 0;
  }
});

function calculateCount(str, letter) {
  let count = 0;
  const target = letter.toLowerCase();
  const current = str.toLowerCase();
  for (let i = 0; i < current.length; i++) {
    if (current[i] === target) {
      count++;
    }
  }
  return count;
}
