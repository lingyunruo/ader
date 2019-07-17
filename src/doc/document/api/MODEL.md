### model类属性


| 名称 | 说明 |
|-----|------|
| name | 此model的命名空间，字符串 |
| data | 数据格式，对象 |
| methods | model自己的方法，这里面的方法都会自动带有，getData, setData函数作为参数，并且只能对本model设置 |
| didInstance | 实例化之后的生命周期函数 |
| didAllInstance | 一组model类全部实例化之后执行 |