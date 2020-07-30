function gao_bind(fn, obj) {
  return function() {
    return fn.apply(obj, arguments);
  }
}

// test

function test() {
  console.log(this.name);
}

let obj = { name: 'ataola' };

test.bind(obj)();

gao_bind(test, obj)();