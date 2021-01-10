function func() {
  // 浏览器 this = window
  // node.js this = global
  this.name = 'ataola';
}

func();
console.log(global);

const obj = {
  // this = obj
  func: function() {
    this.name = 'zjt';
  }
}


obj.func();
console.log(obj);