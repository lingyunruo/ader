### action概念介绍

> 注意这里的action和redux里的action概念并不相同，redux的action只是作为数据传递的通道，而这里的action承载了逻辑的定义。

action的形态是由ES6的class定义的一个类。ader通过render方法，将组件和action类相关联。于是action内，就可以调用通过各种方式传递给组件的方法或者属性，而组件可以通过传入的action句柄来进行调用action内定义的方法。

action的作用是组织逻辑，并且在每一个action上会挂载一些有用的方法。可以认为，action即是把react组件内部的逻辑函数单独抽取出来，单独维护。

action类，是可以通过设置extend字段进行多重继承，从而可以继承其他action内的方法。这里建议建立action的时候，区分出与组件操作相关的action和独立逻辑的action，以达成逻辑复用的目的。

### action 示例

```js


import ExtendMethods from './extend-methods';

export default class MainAction {
    constructor(c) {
        this.c = c;
    }

    extend = [ExtendMethods]

    didMount = () => {
        setTimeout(() => {
            this.c.setState({
                name: 'ader-example-is-running'
            });
            this.c.props.store.setData('main.description', '一个整合react的框架');
        }, 3000);
    }

    didUpdate = () => {
        console.log('has update component');

        // 从ExtendMethods继承来的方法
        this.getName();
    }

    willUnMount = () => {
        console.log('unMount component');
    }

    didInstance = () => {
        console.log('本action类已经实例化完成');
    }

    didAllInstance = () => {
        console.log('与本组件相关action全部实例化完成');
    }
}
```