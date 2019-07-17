### render(Config)(Function)

> 说明: render方法的功能是将action类和组件绑定到一起，然后生成一个包装好的组件。同时可以设定组件自己的状态。

#### 参数

1、Config: Object

- actions: 对象类型， 设定要绑定到这个组件的action，其中，对象的key值是你将在这个组件里使用这个action的句柄，value值是action类。

- state: 设定这个组件的state

- ...others: 其他参数会组成数组成为Function函数从第二个参数。

2、Function(config, others)

接受两个参数:

- config: 有三个属性，state，props，action
    - state是了本组件自己设定的状态
    - props是传入本组件的状态
    - action是绑定到这个组件的action类的示例。
- other: 自定义设定的其他参数数组

函数返回值: 

返回react组件

#### render函数返回值

调用render，返回一个绑定了action的组件。


#### render使用示例

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