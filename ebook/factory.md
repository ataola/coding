# 工厂模式

## 工厂模式的基本概念

读到“工厂”这个词，我脑海里浮现了几个词，"批量", "流水线", 连一起就是要搞批量流水线生产了。通过维基百科得知，工厂模式定义一个创建对象的接口，但让实现这个接口的类来决定实例化哪个类。工厂方法让类的实例化推迟到子类中进行。”

### 简单工厂

通过维基百科得知，简单工厂模式创建一个单一的工厂类，用以包含选择逻辑，根据参数的不同选择实现不同的具体对象。比如说养猪，它其实比较单一，就是养猪厂，你不需要考虑太多，给猪猪一个名字或者编号，然后按照它的品种去划分，例如长白猪、大白猪、杜洛克猪等，等养的差不多了，就可以联系买家来买了，这种养猪模型可以用简单工厂去实现。简单地说，去实现一个简单工厂模式其实就是搞一套无脑传参。

### 抽象工厂

通过维基百科得知，抽象工厂模式提供了一种方式，可以将一组具有同一主题的单独的工厂封装起来。比如波音公司的飞机厂，它有很多的飞机系列，例如波音 737、波音 747 等，飞机有供飞行员操作的操作系统，也有很多硬件，比如发动机、玻璃、轮胎等等，就比较复杂了。我们把一些公共的抽象出来，然后在具体的型号上去实现这些抽象定义的，像这种就可以用抽象工厂去实现。简单地说，就是东西有点复杂，需要遵循开放封闭原则去设计这个模式。

## 工厂模式的实现

### 简单工厂模式的实现

以养猪为例（本故事纯属虚构，仅做代码演示）

```typescript
// 本故事纯属虚构，仅做代码演示
function SimpleFactory(name: string, type: string): Pig {
  let describe;
  switch (type) {
    case '长白猪':
      describe = '美容养颜';
      break;
    case '大白猪':
      describe = '吃了不胖';
      break;
    case '杜洛克猪':
      describe = '可以当宠物';
      break;
    default:
      describe = '可以种田';
      break;
  }
  return new Pig(name, type, describe);
}

class Pig {
  name: string;
  type: string;
  describe: string;

  constructor(name: string, type: string, describe: string) {
    this.name = name;
    this.type = type;
    this.describe = describe;
  }
}
```

### 抽象工厂模式的实现

以造飞机为例，这里意思下，就拿飞机的操作系统和发动机做演示（本故事纯属虚构，仅做代码演示）

```typescript
// 定义操作系统相关接口
interface OS {
  // 控制发动机引擎
  controlEngine(): void;
}

// 定义发动机引擎相关接口
interface Engine {
  // 提供相关操作接口
  operateAPI(): void;
}

// 定义飞机厂相关接口，其他啥也不干
interface AirplaneFactory {
  // 创建操作系统
  createOS(): OS;
  // 创建发动机引擎
  createEngine(): Engine;
}

// VxWorks操作系统
class VxWorks implements OS {
  controlEngine(): void {
    console.log('这里是VxWorks操作系统，详情请咨询：http://www.windriver.com/products/vxworks/');
  }
}

// Integrity-178B操作系统
class Integrity178B implements OS {
  controlEngine(): void {
    console.log(
      '这里是Integrity-178B操作系统， 详情请咨询：https://www.ghs.com/products/safety_critical/integrity-do-178b.html'
    );
  }
}

// GEnx发动机引擎
class GEnx implements Engine {
  operateAPI(): void {
    console.log('GEnx发动机引擎运行');
  }
}

// Trent XWB发动机引擎
class TrentXWB implements Engine {
  operateAPI(): void {
    console.log('Trent XWB发动机引擎运行');
  }
}

// 波音-787飞机厂
class Boeing787 implements AirplaneFactory {
  createOS(): OS {
    return new VxWorks();
  }

  createEngine(): Engine {
    return new GEnx();
  }
}

// 空客-A350飞机厂
class AirbusA350 implements AirplaneFactory {
  createOS(): OS {
    return new Integrity178B();
  }

  createEngine(): Engine {
    return new TrentXWB();
  }
}

// 开始造波音787
const boeing787 = new Boeing787();
const boing787OS = boeing787.createOS();
const boeing787Engine = boeing787.createEngine();
// 波音787启动操作系统
boing787OS.controlEngine();
// 波音787调整引擎推力
boeing787Engine.operateAPI();

// 开始造空客A350
const airbusA350 = new AirbusA350();
const airbusA350OS = airbusA350.createOS();
const airbusA350Engine = airbusA350.createEngine();
// 空客A350启动操作系统
airbusA350OS.controlEngine();
// 空客A350调整引擎推力
airbusA350Engine.operateAPI();
```

运行这里全局安装`ts-node`这个 npm 包，然后运行相关文件即可，如

```shell
PS D:\ataola\github\ataola\coding-ts\code\design-pattern\factory> ts-node .\abstract-factory.ts
这里是VxWorks操作系统，详情请咨询：http://www.windriver.com/products/vxworks/
GEnx发动机引擎运行
这里是Integrity-178B操作系统， 详情请咨询：https://www.ghs.com/products/safety_critical/integrity-do-178b.html
Trent XWB发动机引擎运行
PS D:\ataola\github\ataola\coding-ts\code\design-pattern\factory>
```

## 参考文献

- 维基百科 - 工厂模式： https://zh.wikipedia.org/wiki/%E5%B7%A5%E5%8E%82%E6%96%B9%E6%B3%95

- 维基百科 - 抽象工厂模式: https://zh.wikipedia.org/wiki/%E6%8A%BD%E8%B1%A1%E5%B7%A5%E5%8E%82
