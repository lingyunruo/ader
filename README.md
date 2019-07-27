# Ader

ader设计核心理念是将jsx、逻辑和状态进行分离，单独管理。逻辑通过action类概念进行管理，数据通过model类进行管理。这里的action和model，是新设定的两个概念。

ader不是一个完整的框架，而更倾向于一种设计规范或者设计模式。ader提供了几个API，来保证代码的组织和书写会按照既定规范来进行。

对于数据管理，遵照集中状态统一管理的理念。对于数据的存取，提供了简便的API。

ader适用于状态多，重逻辑的应用。

### model示例

```js
export default class MainModel {
    name = 'main'

    data = {
        description: '这是什么',
        timeCount: 5
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

### render使用示例

```js
const HomePage = render({
    actions: {
        ma: MainAction
    },
    state: {
        name: 'ader-example'
    }
})(({props, state, action}) => {
    let description = props.store.getData('main.description').value;

    return (
        <div>
            <label>姓名: </label>
            <span>{state.name}</span>
            <div>
                {description}
            </div>
        </div>
    );

});
```

### action示例
```js
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
        }, 5000);
        let timer = setInterval(() => {
            let timeCount = this.c.props.store.getData('main.timeCount').value;
            if(timeCount <= 0) {
                clearInterval(timer);
                return;
            }

            this.c.props.store.setData('main.timeCount', timeCount - 1);
            
        }, 1000);
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

详细文档见：http://www.amiling.com:8080

示例见：src/doc/document/exam/example
