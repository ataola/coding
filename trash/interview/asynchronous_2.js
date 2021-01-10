setTimeout(() => {
  Promise.resolve().then(() => {
    console.log('promise');
  });
}, 0);

Promise.resolve().then(() => {
  setTimeout(() => {
    console.log('setTimeout');
  }, 0);
});

console.log('sync');