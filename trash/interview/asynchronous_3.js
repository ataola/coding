setTimeout(() => {
  console.log('setTimeout');
});

Promise.resolve().then(() => {
  console.log('p1');
  Promise.resolve().then(() => {
    console.log('p2');
    Promise.resolve().then(() => {
      console.log('p3');
    });
  });
});

console.log('sync');