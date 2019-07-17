import store from './store';

import {deepCopy, getType} from './h';

import insetRegular from './inset-regular';
import pubSub from '../utils/pubSub';
import {subscribeName} from './constant';

// 按照 option给的顺序读取值
// 输入a.b.c.d 输出 [a,b,c,d]
function readObject(option, data) {

    if(!Array.isArray(option)) {
        return;
    }
    if(option.length === 0) {
        return {
            value: data
        }
    }

    let currentKey = option.shift();
    let value = data[currentKey];

    if(option.length === 0) {
        return {
            key: currentKey,
            value: value
        }
    }

    if(!/(Object)|(Array)/.test(getType(value))) {
        return {
            key: currentKey,
            value: value
        };
    }
    else {
        return readObject(option, value)
    }

}

function cuttingKey(option) {

    let optionList = [];
    let arr = option ? option.split('[') : [];

    if(arr.length === 1) {
        optionList = arr[0].split('.');
    }
    else {
        optionList = arr[0] ? arr.shift().split('.') : [];
        arr.forEach((item) => {
            let arr2 = item.split(']');

            optionList.push(arr2[0]);

            let afterMidBrackets = arr2[1].replace(/^\./, '');
            
            if(afterMidBrackets) {
                optionList = optionList.concat(afterMidBrackets.split('.'));
            }
        });
    }

    return optionList;
}

function getData(option = '', regular) {
    let optionList = cuttingKey(option);

    let data = store.getData();

    let value = readObject(optionList, data);

    if(regular === undefined) {
        pubSub.publish(subscribeName.CALL_GET_DATA, option, value, regular);
        return {
            ...deepCopy(value)
        };
    }
    else {
        let regType = getType(regular);
        let verifyInfo = [];

        if(regType === 'Array') {
            
            regular.forEach((reg, index) => {
                let res = verifyValue(value, reg);

                verifyInfo.push(res);
            });
        }
        else {
            let res = verifyValue(value, regular);
            verifyInfo.push(res);
        }

        pubSub.publish(subscribeName.CALL_GET_DATA, option, value, regular);
        
        return {
            ...deepCopy(value),
            verifyInfo: verifyInfo
        }
    }
}

function setData(option = '', value) {
    let optArr = cuttingKey(option);

    let modelName = optArr.shift();
    let data = store.getData(modelName);
    let optLength = optArr.length;

    let midData = data;

    if(optLength === 0) {
        data = value;
    }
    else if(optLength === 1) {
        data[optArr[0]] = value;
    }
    else if(optLength > 1) {
        for(let i=0;i<optLength;i++) {
            let currentKey = optArr[i];
            let type = getType(midData[currentKey]);
            let isArrayKey = /\[\d+\]/.test(currentKey);
            let index = 0;

            if(isArrayKey) {
                let keyArray = currentKey.split('[');

                currentKey = keyArray[0];
                index = Number(keyArray[1].replace(']', ''));
                type = getType(midData[currentKey]);

                if(type !== 'Array') {
                    midData[currentKey] = [];
                }
 
                midData = midData[currentKey];
                currentKey = index;
                type = getType(midData[currentKey]);
            }

            // 如果当前这个key是字符串
            if(type === 'String' || type === 'Number' || type === 'Boolean' || type === 'Undefined' || type === 'Null') {
                // 如果不是最后一个，那么给这个变成空对象
                if(i !== optLength - 1) {
                    midData[currentKey] = {};
                }
            }

            // 如果当前这个已经是最后一个了， 那么就把值赋给它
            if(i === optLength - 1) {
                midData[currentKey] = value;     
            }
            else {
                midData = midData[currentKey]
            }
        }
    }

    store.setData(modelName, data);
    
    pubSub.publish(subscribeName.CALL_SET_DATA, option, value);
}

function verifyValue(value, reg) {
    let type = getType(reg);

    if(type === 'String' && insetRegular[reg]) {
        let res = insetRegular[reg](value.value);

        return {
            ...res,
            regularType: reg
        };
    }
    else if(type === 'RegExp') {
        let res = reg.test(value.value);
        
        return {
            verification: res,
            regularType: reg.toString()
        }
    }
    else if(type === 'Function') {
        let res = reg(value.value);

        return {
            verification: res,
            regularType: 'function'
        }
    }

    return {
        verification: false,
        regularType: reg
    }
}

export default () => {
    return {
        getData: getData,
        setData: setData,
        verifyValue: verifyValue
    };
};