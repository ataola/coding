function gao_set_interval(cb, time) {
  let tmp = function() {
    setTimeout(tmp, time);
    cb.apply(null);
    // cb();
  }; 
  setTimeout(tmp, time);
}

// test
gao_set_interval(() => {
  console.log('test');
}, 3000);