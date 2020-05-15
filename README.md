## 简介

> 这是一个组织基于react代码的框架。框架将组件，逻辑，数据模型的代码分开管理。适用于重逻辑和重数据模型的场景。整个框架只暴露了Model基础类，render方法，createStore方法，connect方法，简单易懂。本框架 用到了es6的class静态属性语法，需要安装babel-plugin-transform-class-properties插件

## 概念

- Action，代表了逻辑操作，一切的业务逻辑，交互逻辑，以一个ES6的class的形式实现
- Model，代表了数据模型，也是以ES6的class形式出现，并且所有的Model都会自动继承基础类，拥有一些简单的方法
- 组件，代表了渲染操作，通过render方法，将action和组件结合，通过props，获取定义的model内的数据

## API

### render

> render方法的作用是将action类和界面连接起来。最终会返回一个组件。这是一个高阶函数，用法示例如下

```js
let options = {
    actions: {
        main: Action
    },
    state: {
        name: ''
    }
};
render(options)(({props, state, action}) => {
    return (
        <div></div>
    );
})
```
#### 说明

> render是一个高阶函数，接受一个对象作为参数，返回的函数接受一个组件作为参数。如上例中，options有两个属性，actions代表了要绑定在这个组件上的Action类。state表示这个组件的state状态。

> actions是个对象，他的属性值成为一个命名空间，如上图，可以通过第二个括号里的函数的action参数调用，如action.main.xxx方法

> 第二个括号内的参数是一个函数，此函数需要返回一个组件，函数参数是一个对象，对象有三个属性，props，state，action，props内包含Model里定义的数据，action里包含定义在action里的方法，state是上面定义的状态。

### Model

> 基础数据模型类，拥有set和get方法。拥有on  off   trigger等方法，即使不尽兴显示的继承，在createStore的时候也会默认继承这个类，因为connect方法在连接组件和store的时候，用到了on方法订阅消息，用到了set方法发布消息。所以，如果想修改数据，请通过set方法修改。重写set方法的时候，请在set方法后触发下change事件。

```js
class MainModel  {
    constructor() {

    }

    name = 'main'

    data = {
        jjj: 'kkk'
    }

    alertGo = () => {
        this.set({jjj: 'iii'});
        this.set('jjj', 'ppp');
        alert('model go go go');
    }
    
}
```

#### 说明

> 模型里name和data是必须的，name最终会挂到props和action实例的models属性上。data属性定义数据。以下是model自带的一些简单方法。

> set: 接受一个或者两个参数，一个参数的时候是对象，会合并到data里，接受两个参数的时候，第一个参数是key，第二个参数是值。调用set会触发change事件，和change:<key>事件。

> get: 获取属性值，传啥参数获取哪个属性值。不传参数会返回整个data

> has: 判断此属性值是否存在，为null或者undefined  会返回false

> deepClone: 深拷贝，传入一个对象则返回深拷贝，否则返回data的拷贝

> previous: 获取上一次修改的值

> on: 订阅方法，可以采用 this.on('change:name') 的形式订阅某个属性值的变化

> off: 取消订阅

> trigger: 主动触发某个事件

### createStore
```js

let store = createStore([MainModel, MainModel2]);

```

> 创建store，此方法会返回所有model示例的集合。

### connect
```js

import {render} from 'react-dom';
let WrapperComponent = connect(HomePageComponent);

render(<WrapperComponent store={store}/>, document,getElementById('app'))

```

> 连接store和组件的方法，最终store会挂在组件的props属性上



> 至此，逻辑和组件通过render连接，数据和组件通过connect连接，逻辑和数据在render执行期间结合在一起
