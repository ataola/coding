const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  const binary = (+line).toString(2);
  console.log(
    Math.max.apply(
      null,
      binary
        .replace(/0+/g, ' ')
        .split(' ')
        .map((item) => item.length)
    )
  );
});
