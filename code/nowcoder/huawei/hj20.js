const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  if (line.length > 8) {
    let count = 0;
    if (/[a-z]/.test(line)) {
      count++;
    }
    if (/[A-Z]/.test(line)) {
      count++;
    }
    if (/\d/.test(line)) {
      count++;
    }
    if (/[^\w\s]+/.test(line)) {
      count++;
    }
    const arr = [];
    for (let i = 0; i <= line.length - 3; i++) {
      arr.push(line.slice(i, i + 3));
    }
    const dist = [...new Set(arr)];
    if (arr.length === dist.length && count >= 3) {
      console.log('OK');
    } else {
      console.log('NG');
    }
  } else {
    console.log('NG');
  }
});
