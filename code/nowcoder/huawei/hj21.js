const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const letter_map = {
  a: 2,
  b: 2,
  c: 2,
  d: 3,
  e: 3,
  f: 3,
  g: 4,
  h: 4,
  i: 4,
  j: 5,
  k: 5,
  l: 5,
  m: 6,
  n: 6,
  o: 6,
  p: 7,
  q: 7,
  r: 7,
  s: 7,
  t: 8,
  u: 8,
  v: 8,
  w: 9,
  x: 9,
  y: 9,
  z: 9,
  A: 'b',
  B: 'c',
  C: 'd',
  D: 'e',
  E: 'f',
  F: 'g',
  G: 'h',
  H: 'i',
  I: 'j',
  J: 'k',
  K: 'l',
  L: 'm',
  M: 'n',
  N: 'o',
  O: 'p',
  P: 'q',
  Q: 'r',
  R: 's',
  S: 't',
  T: 'u',
  U: 'v',
  V: 'w',
  W: 'x',
  X: 'y',
  Y: 'z',
  Z: 'a',
};

rl.on('line', function (line) {
  const arr = line.split('');
  const res = arr
    .map((item) => {
      return letter_map[item] || item;
    })
    .join('');
  console.log(res);
});
