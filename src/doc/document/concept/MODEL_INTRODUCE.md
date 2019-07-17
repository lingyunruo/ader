### model概念介绍

model的形态是由ES6的class定义的一个类的形式。ader通过register方法注册model，通过startModel方法启动model。

model主要负责数据的管理，只有几个简单的API，并且可以注册多个model。对于开发者而言，所有的model数据都是可获取的。


### model示例

```js
export default class MainModel {
    name = 'main'

    data = {
        description: '这是什么'
    }

    methods = {}

    didInstance = function(store) {
        console.log('本model类实例化完成')
    }

    didAllInstance = function(store) {
        console.log('所有model类实例化完成');
    }
}
```