# 记一次华为机试

## 介绍

华为机试分为 `3` 题，两题 `100` 分，一题 `200` 分，压线 `150` 分算你过，时间`150`分钟，支持多语言环境（牛客网），考试时需全程打开摄像头，电脑屏幕分享，手机打开某小程序（可用计算器）不退出，可用本地 `IDE`, 会有一些测试题给你熟悉环境预热的。

**备注：** 由于脑容量有限，题目具体的描述笔者已经记不清了，但是一些考点还是记忆犹新，遂记录分享下。做机考这几点很重要， 第一点是你要看明白它的输入输出是什么？ 第二点是要快，比如说你明知道有现成的意大利炮可以轰它，咱就不要自己造个土炮了，挺浪费时间的，毕竟机考的本质其实是刷人， 第三点就是心态一定要好，你会做的你要尽量 100%把它做出来，遇到不会的智商题，那也就听天由命了。

## 消消乐（字符串）

### 描述

给定一个只包含大小写字母的字符串（大小写敏感），若相邻两个元素相等则消除，直到最后字符串消除不了了，输出消消乐后字符串的长度，若遇到非大小写字母以外的字符，则输出`0`。

### 示例

```
输入： mMbccbc
输出： 3

解释：cc消掉，然后bb消掉，最后剩余mMc,输出长度3
```

### 题解

这里我是把一些特殊情况单独拎出来处理，然后创建了一个字符串`res`去存最后得到的字符串，然后输出其长度。

```javascript
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  console.log(solution(line.trim()));
});

function solution(str) {
  if (/[^a-zA-Z]/.test(str)) {
    return 0;
  }
  if (str.length === 1) {
    return 1;
  }
  if (str.length === 2) {
    if (str[0] === str[1]) {
      return 0;
    } else {
      return 2;
    }
  }
  let res = '';
  let cur = 0;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      i++;
    } else {
      if (res.length > 0 && res[res.length - 1] === str[i]) {
        res = res.slice(0, res.length - 1);
      } else {
        res += str[i];
      }
    }
    cur = i;
  }
  cur = cur + 1;
  if (str[cur]) {
    if (res[res.length - 1] === str[cur]) {
      res = res.slice(0, res.length - 1);
    } else {
      res += str[cur];
    }
  }
  return res.length;
}
```

## 矩阵最大值（二维矩阵）

### 描述

给定一个`n*n`的只包含`0`和`1`的二维矩阵，请你计算出该矩阵的最大值。 计算方式为将每一行的元素组成二进制数的十进制数相加，每一行元素可以进行左移右移（实质就是求出每行的最大值相加）， 比如说`10001`向左移一位就是`00011`。

### 示例

```
输入：
5
1,0,0,0,1
0,0,0,1,1
0,1,0,1,0
1,0,0,1,1
1,0,1,0,1

输出：
122

解释：当n为5时，即5*5的二维矩阵时，通过相关左右平移，得到二维矩阵的最大值是122
```

### 题解

灵机一动，结合了`parseInt(str, radix)`可以将二进制转成十进制数，求其最大值，最后相加求得矩阵最大值。

```javascript
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let res = 0;

rl.on('line', function (line) {
  if (count === 0) {
    count = +line;
    res = 0;
  } else {
    res += solution(line.trim());
    if (count === 1) {
      console.log(res);
    }
    count--;
  }
});

function solution(str) {
  const arr = str.split(',');
  let max = parseInt(arr.join(''), 2);
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    const tmp = parseInt(arr.slice(i, len).concat(arr.slice(0, i)).join(''), 2);
    max = max > tmp ? max : tmp;
  }
  return max;
}
```

## 树的剪枝（树）

### 描述

给定一棵树，删除某个结点（结点值唯一）及其下面的子结点（额，这题是我高度概括的，做的操作就类似于给你一棵叉树，你用剪刀把某个枝给剪掉去）,并把剩余结点按从小到大输出。

### 示例

```
输入：
5
2 10
8 10
3 8
4 8
1 4
8

输出：
2 10

解释：表示先输入5组数据，然后每行前面的数字是子结点，后面的数字是父结点，最后输入要删除的结点8，输出剩余的结点（由小到大）
```

### 题解

时间关系，这题就不用树去求解了吧，考虑到我是个`jser`,所以我先创建了一个对象`obj`, 将父结点以字符串`key`的形式存储，将子结点以数组`value`的形式存储，最后我只需要递归出要删除的值存入`removed_arr`,然后进行过滤排序即可得出答案。

```javascript
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let obj = {};
let count = 0;
const removed_arr = [];

rl.on('line', function (line) {
  if (count === 0) {
    count = parseInt(line) + 1;
    obj = {};
    removed_arr.length = 0;
  } else {
    if (count === 1) {
      const arr = [];
      func(line, obj);
      for (const key in obj) {
        if (key !== line && !removed_arr.includes(key)) {
          arr.push(key);
        }
        arr.push(...obj[key].filter((item) => !removed_arr.includes(item)));
      }
      console.log(arr.sort((a, b) => Number(a) - Number(b)).join(' '));
    } else {
      const [value, key] = line.split(' ');
      if (obj[key]) {
        obj[key].push(value);
      } else {
        obj[key] = [value];
      }
    }
    count--;
  }
});

function func(key, obj) {
  if (obj[key]) {
    for (const val of obj[key]) {
      func(val, obj);
    }
  }
  removed_arr.push(key);
}
```

## 最后

总的来说，菊厂出的试卷题目考点还是分布比较均匀的，数据结构和常规算法一定要好好学，嗯，我回去补树去了。。。。。。
