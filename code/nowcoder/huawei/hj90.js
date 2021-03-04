const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  console.log(isValidIp(line));
});

function isValidIp(ip) {
  const arr = ip.split('.');
  for (const val of arr) {
    if (+val < 0 || +val > 255) {
      return 'NO';
    }
  }
  return 'YES';
}
