

import BaseModel from './BaseModel';
import getProtoList from '../utils/getProtoList';

export default ({setData, getData}) => (modelList, options) => {

    // 存储model类的列表
    setData('ModelClassList', modelList);

    let modelInstance = {};
    // 实例化所有model类
    Array.isArray(modelList) && modelList.forEach((Model, index) => {
        let proto = getProtoList(Model).prototypes;

        let model = new Model();

        if(proto.constructor.name !== 'BaseModel') {
            let base = new BaseModel(model);
            Object.setPrototypeOf(proto, base);
            // proto.__proto__ = base
        }

        if(!model.name) {
            throw new Error('Every Model Need A Name Attribute');
        }
        else if(!model.data) {
            throw new Error('Every Model Need A Data Attribute');
        }

    
        modelInstance[model.name] = model;
    });

    // 存储model实例
    setData('modelInstanceList', modelInstance);

    return modelInstance;
}