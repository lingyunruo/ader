
import EventClass from './Event';

export default class BaseModel extends EventClass {
    constructor(model) {
        super();

        this.model = model;
        // 存储上一次已改变的值
        this.changed = {};
    }

    set(args1, args2) {
        if(args2 === undefined) {
            if(Object.prototype.toString.call(args1) === '[object Object]') {
                Object.keys(args1)
                    .forEach((key) => {
                        this.changed[key] = this.model.data[key];
                        this.model.data[key] = args1[key];
                        this.trigger(`change:${key}`, args1[key]);
                    });
                this.trigger('change', args1);
            }
            else {
                throw new Error('如果只穿一个参数，必须传入一个对象');
            }
        }
        else {
            this.changed[args1] = this.model.data[args1];
            this.model.data[args1] = args2;
            this.trigger(`change:${args1}`, {
                [args1]: args2
            });
            this.trigger('change', {
                [args1]: args2
            });
        }
    }

    get(key) {
        if(key) {
            return this.model.data[key];
        }
        else {
            return this.model.data;
        }
    }

    has(attribute) {
        const {data} = this.model;

        if(data[attribute] === undefined || data[attribute] === null) {
            return false;
        }

        return true
    }

    // 深拷贝
    deepClone(data) {
        let copyData = {};

        if(data === undefined) {
            data = this.model.data;
        }
        Object.keys(data)
            .forEach((key) => {
                if(typeof data[key] === 'object') {
                    copyData[key] = this.deepClone(data[key]);
                }
                else {
                    copyData[key] = data[key];
                }
            });

        return copyData;
    }

    // 获取上一次修改前的值
    previous(attribute) {
        let data = Object.assign({}, this.model.data, this.changed);

        if(attribute) {
            return data[attribute];
        }
        
        return data;
    }
}