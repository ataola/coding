const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  const data_str = line.replace(' ', '-');
  const date = new Date(data_str);
  if (!date) {
    console.log(-1);
  } else {
    const year = date.getFullYear();
    const first_day = new Date(year + '-01-01');
    const res = Math.floor((date - first_day) / 86400000) + 1;
    console.log(res);
  }
});
