# 设计模式之单例模式

## 单例模式的基本概念

单例模式是一种保证一个类仅有一个实例，并提供一个全局访问点的设计模式，它还有些许其他的叫法，比如说懒汉模式、单子模式等。那么这种设计模式解决了一个什么事情呢？我们来看下这样一段代码

```javascript
function Foo() {}

const s1 = new Foo();
const s2 = new Foo();
console.log(s1 === s2); // false
```

从结果上看，每通过构造函数创建一个对象，就会新开辟一片内存去存储，所以两个对象的值是不相等，而我们要做的事情是，让它每次创建出来的结果都是同一个，那这就是单例模式，运用到现实生活中的场景，比如说全局状态、前端页面中的模态框等等。下面跟着单例模式的实现，我们来一步一步地改造它。

## 单例模式的实现

随着 ECMAScript 标准的更新换代，最开始我们是通过函数+全局变量，或者函数加闭包的形式去实现单例模式，到后来 ES6 中有了 Class 的语法，我们可以用 Class 去写单例，所以本文通过三种方式介绍单例模式的实现。

### 全局变量 + 函数

```javascript
function Singleton() {}

Singleton.getInstance = function () {
  if (!window.instance) {
    window.instance = new Singleton();
  }
  return window.instance;
};

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
console.log(s1 === s2); // true
```

这里思考下这样写有什么不好的吗？有的。例如程序员李雷在全局变量上挂载了一个 instance 属性，程序员韩梅梅也在全局变量 windows 上挂载了一个 instance 属性。他们互相都不告诉对方自己在 windows 上挂载了一个 instance 属性，那么这个时候是不是就会产生冲突呢？所以这样子写，不好。

### 函数+闭包

```javascript
function Singleton() {}

Singleton.getInstance = (function () {
  let instance = null;
  return function () {
    if (!instance) {
      instance = new Singleton();
    }
    return instance;
  };
})();

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
console.log(s1 === s2); // true
```

### ES 中面向对象的 Class

```javascript
class Singleton {
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
console.log(s1 === s2); // true
```

## 单例模式的应用

单例模式作为最简单的设计模式之一，在软件开发中应用也很广泛，下面笔者结合自己的经历，主要从前端和后端分别举一个例子来介绍设计模式的应用。

### 单例模式在前端的应用

前面我们说了模态框，比如说，你页面有个登录按钮，点击后会弹出一个登录框，这里每次点击登录都重新弹一个新的模态框，显然是不必要的，因为他们内容是一样的，所以我们期望把它缓存下来，核心代码如下：

```javascript
class Modal {
  static getInstance() {
    if (!Modal.instance) {
      Modal.instance = new Modal();
      Modal.instance.createElement();
    }
    return Modal.instance;
  }

  createElement() {
    this.div = document.createElement('div');
    this.div.id = 'modal';
    this.div.innerHTML = '全局模态框';
    this.div.style.display = 'none';
    document.body.appendChild(this.div);
  }

  open() {
    this.div.style.display = 'block';
  }

  close() {
    this.div.style.display = 'none';
  }
}

document.getElementById('BtnOpen').addEventListener('click', () => {
  const modal = Modal.getInstance();
  modal.open();
});

document.getElementById('BtnClose').addEventListener('click', () => {
  const modal = Modal.getInstance();
  modal.close();
});
```

具体的 demo 地址： https://zhengjiangtao.cn/show/design-mode/singleton.html

### 单例模式在后端的应用

这个是笔者在通过 nodejs 做微信开发的时候，借助单例模式的思想优化相关的业务代码的实践所得，就是不能每次前端这边来一个请求，或者别的地方引用或者使用到封装的微信接口 API，就重新创建一个新的，那么数据量上去了，这边开销是会很大的，比如百万、千万等等，所以我们期望把它缓存下来，然后用到直接取就好了。

## 参考文献

- 维基百科 - 设计模式： https://zh.wikipedia.org/wiki/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F
