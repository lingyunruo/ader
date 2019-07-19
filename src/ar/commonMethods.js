// 通用的能力


// 判断类型
function isType(value, type) {
    return Object.prototype.toString.call(value) === `[object ${type}]`
}

// 替换/删除数组中某项，全等
function removeItem(list, item, newItem) {

    if(!isType(list, 'Array')) {
        throw new Error(`removeItem Error: ${list}不是个数组`);
    }

    let index = list.indexOf(item);

    if(index < 0) {
        return list;
    }

    if(newItem !== undefined) {
        list.splice(index, 1, newItem);
    }
    else {
        list.splice(index, 1);
    }
   

    return list;
}


const methods = {
    isType: isType,
    removeItem: removeItem
};


// 将通用的能力赋给传入进来的action对象
export default function(action) {

    if(!isType(action, 'Object')) {
        return;
    }

    Object.keys(methods).forEach((key) => {
        if(!action.hasOwnProperty(key)) {
            action[key] = methods[key].bind(action)
        }
    })

}