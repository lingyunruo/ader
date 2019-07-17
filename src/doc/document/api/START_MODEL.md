### startModel

#### 返回值

返回一个store对象，store对象拥有一些方法


#### store对象的方法

#### store拥有的方法

| 方法名 | 说明 | 示例 |
|-------|-----|------|
| getData(keyListStr[, regulars]) | 获取任意model里的数据，接受两个参数，第二个参数为选填。第一个参数为所要获取数据的键值字符串，第二个参数为过滤方法，可以是数组，函数，正则，字符串。调用这个方法会发布CALL_GET_DATA事件。 | store.getData('abc.info.name', ['required', 'email']), 这个方法获取名字为abc的model里的info对象下的name属性的值，并且同时检测是否为空，是否符合email格式 |
| setData(keyListStr, value) | 设置任意model里的数据，接受两个参数，第一个参数是键值串，第二个为要更新的值。调用这个方法会发布CALL_SET_DATA 事件 | store.setData('abc.info.name', 'alilang')，这个示例设置名为abc的model的info里的name属性值为alilang。|
| verifyValue(value, regular) | 验证数据，第一个参数为要验证的数据，第二个参数为验证规则，可以为字符串正则和函数 | store.verifyValue({}, 'required'), 验证对象是否为空 |
| models | store.models上挂载了以model的name名称为key值的对象，对象指向model实例 | store.models.abc 获取名为abc的model实例 |

#### 示例
```js
let store = startModel();

store.getData('main.info.name');
```