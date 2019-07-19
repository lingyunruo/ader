### action类属性及方法


#### action类内部的方法
| 方法名 | 参数 | 说明 |
|-------|-----|------|
| isType | value, type | 判断value是否是type类型 |
| removeItem | list, item, newItem(可选) | 删除list数组里的某一项，如果有newItem，则替换成newItem |

#### action类内部的pubSub对象的方法
| 方法名 | 参数 | 说明 |
|-------|-----|------|
| publish | type[, args...] | 发布消息，type是消息类型，args是参数，除了type，剩余的所有参数都会传入订阅方法回调函数的参数 |
| subscribe | type, callback | 订阅消息，type是消息类型，callback是回调函数，callback参数是publish的传入 |
| unSubscribe | type[, fn] | 取消订阅，如果传入fn，取消对应的函数，如果没有传入，则取消这个type下的所有订阅函数 |

> action里有几个固定的函数，对应了action和组件的一些生命周期

| 函数名 | 说明 |
|-------|-----|
| didMount | 对应绑定组件的componentDidMount |
| willUnMount | 对应绑定组件的componentWillUnMount |
| didUpdate | 对应绑定组件的componentDidUpdate |
| didAllInstance | 当组件绑定的所有action都完成了实例化之后执行 |
| didInstance | 当前的action完成实例化之后执行 |