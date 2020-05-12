

export default class Event {
    constructor() {
        this.funcs = {};
    }

    on = (eventName, callback) => {
        if(!this.funcs[eventName]) {
            this.funcs[eventName] = [];
        }

        this.funcs[eventName].push(callback);
    }

    off = (eventName, callback) => {
        let funcs = this.funcs[eventName];

        if(Array.isArray(funcs)) {
            let callbackIndex = funcs.findIndex(callback);

            if(callbackIndex > -1) {
                funcs.splice(callbackIndex, 1);
                this.funcs[eventName] = funcs;
            }
            else {
                this.funcs[eventName] = [];
            }
        }
    }

    trigger = (eventName, ...args) => {
        let funcs = this.funcs[eventName];

        if(Array.isArray(funcs)) {
            funcs.forEach((callback) => {
                typeof callback === 'function' && callback(...args);
            });
        }
    }
}