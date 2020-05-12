
import getProtoList from '../utils/getProtoList';


export default function(Action) {

    // 拿到action里配置的父类
    let Parents = Action.extends;
    // 将父类的所有prototype存储起来
    let prototypes = [];
    // 存储主类的prototype
    let mainActionProto = getProtoList(Action);
    // 存储父类实例上的方法
    let instanceProp = {};

    // 遍历父类，取出父类的proto，并且拿到父类实例方法
    Parents.forEach((Parent, index) => {
        prototypes.push(getProtoList(Parent));
        
        let parent = new Parent();

        Reflect.ownKeys(parent).forEach((key) => {
            instanceProp[key] = parent[key];
        });
    });
    // 最后一个将父类实例方法当成prototype挂上去
    prototypes.push({
        result: instanceProp,
        prototypes: instanceProp
    });
    // 主类在数组最后，最终所有的父类方法放到主类prototype上
    prototypes.push(mainActionProto);

    let len = prototypes.length;

    // 设置prototype链
    prototypes.forEach((obj, index) => {
        if(index < len - 1) {
            Object.setPrototypeOf(prototypes[index + 1].prototypes, obj.result);
            // prototypes[index + 1].prototypes.__proto__ = obj.result;
        }
        else {
            // console.log(obj.result);
        }
    });
}