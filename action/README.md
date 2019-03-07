## render方法解析

```js

const YourComponent = render({
    actions: {
        customAction: CustomActionClass
    },
    state: {},
    yourData: '我是自定义的任何的数据'
})(({props, action, state}, {yourData}) => {

    return (
        <div
            onClick={action.customAction.btnClick}
        >
            {props.name}
        </div>
    );

})


class CustomActionClass {

    didMount = () => {
        console.log('会在组件渲染完的didmount里渲染');
    }

    didUpdate = () => {
        console.log('会在每次组件更新完毕之后执行，对应组件的componentdidupdate')
    }

    btnClick = () => {
        console.log('按钮点击了');
    }

}

```

> 以上是用法。返回一个包含了action的组件，CustomActionClass是自定义的行为类。

> action类里有一个固定的方法，didMount，didUpdate，会在每次组件渲染完的didmount钩子里执行