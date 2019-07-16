import BaseMethods from './base-methods';

import store from './store';
import pubSub from './pubSub';

import {getType} from './h';
import insetRegular from './inset-regular';

let insetMethods = BaseMethods();

let methodsMap = [];

// 扩展内置验证数据方法
export const extendRegular = insetRegular.extendRegular;

// 注册model，在注册的时候给model的prototype属性添加各种model内可用的方法
// 参数支持一个model也支持model数组
// 返回值是一个model的索引数组
export const register = (Model, opt) => {
    let indexList = [];
    let ModelList = [];
 
    if(typeof Model === 'function') {
        ModelList = [Model];
    }
    else if(Array.isArray(Model)) {
        ModelList = Model;
    }

    ModelList.forEach((ModelItem) => {
        // 通过store提供的方法，存储下Model本身，留下影子应对后来的类型判断
        let modelIndex = store.setModelClass(ModelItem)
        indexList.push(modelIndex);
        methodsMap[modelIndex] = opt;
    });
    return indexList;
} 

export const startModel = (callbackFun) => {

    // 拿到注册的class
    const ModelClassList = store.getModelClass();
    let models = {};
    let storeObj = {
        ...insetMethods,
        pubSub: pubSub
    };

    // 所有已注册model实例化完成钩子，对应model里的didAllInstance
    let modelAllInstanceCallback = [];

    ModelClassList.forEach((ModelClass, index) => {
        // 实例化model
        let model = new ModelClass();
        
        models[model.name] = model;

        if(model.methods) {
            Object.keys(model.methods).forEach((fnName) => {
                model[fnName] = (...args) => {
                    return model.methods[fnName].apply(model, [...args, storeObj]);
                }
            });
        }

        if(typeof model.didInstance === 'function') {
            model.didInstance(storeObj);
        }
        if(typeof model.didAllInstance === 'function') {
            modelAllInstanceCallback.push(model.didAllInstance);
        }
        // 存储下model实例
        store.setModel(model);
    });

    Object.assign(storeObj, {models: models});

    modelAllInstanceCallback.forEach((fn) => {
        fn(storeObj);
    });

    typeof callbackFun === 'function' && callbackFun(storeObj);

    return storeObj;
}