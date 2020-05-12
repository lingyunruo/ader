
import React from 'react';
import extend from './extend';

export default ({getData, setData}) => (options = {}) => {

    return (CustomComponent) => {

        // 存储action实例，最终会挂在每个action上
        let action = {};
        // 存储action里的生命周期函数
        let lifeCycle = {
            'didMount': [],
            'didUpdate': [],
            'willUnMount': [],
            'shouldUpdate': [],
            'didAllInstance': []
        };

        return class extends React.Component {
            constructor(props) {
                super(props);

                // model实例
                let modelInstance = getData('modelInstanceList');
                setData('modelInstanceList', {});

                // 如果配置了actions
                if(options.actions) {
                    Object.keys(options.actions)
                        .forEach((actionKey) => {
                            // 取得action类
                            let Action = options.actions[actionKey];

                            // 检查每个action是否有配置静态的extends属性，如果有，执行extend函数
                            if(Array.isArray(Action.extends)) {
                                extend(Action);
                            }
                            // 实例化action
                            let actionInstance = new Action(this);

                            // 检查action实例里是否定义了生命周期
                            Object.keys(lifeCycle).forEach((key) => {
                                if(typeof actionInstance[key] === 'function') {
                                    lifeCycle[key].push(actionInstance[key].bind(actionInstance));
                                }
                            });

                            // 实例化action
                            action[actionKey] = actionInstance;
                            // 给action挂载model方法
                            actionInstance.models = modelInstance;
                            // 给action setState的能力
                            actionInstance.setState = this.setState.bind(this);
                            // 实例拿到actions
                            actionInstance.actions = action;
                            // 拿到组件实例
                            actionInstance.$instance = this;

                            // 实例化完成的勾子
                            if(typeof actionInstance['didInstance'] === 'function') {
                                actionInstance['didInstance'].call(actionInstance);
                            }
                        });
                    
                    // 执行生命周期函数
                    lifeCycle['didAllInstance'].forEach((fn) => {
                        typeof fn === 'function' && fn();
                    });
                } 

                // 设置state
                if(options.state) {
                    this.state = {
                        ...options.state
                    }
                }
            }

            shouldComponentUpdate() {
                let flag = true;
                lifeCycle['shouldUpdate'].forEach((fn) => {
                    if(typeof fn === 'function') {
                        if(fn() === false) {
                            flag = false
                        }
                    }
                });

                return flag;
            }

            componentWillUnmount() {
                lifeCycle['willUnMount'].forEach((fn) => {
                    typeof fn === 'function' && fn();
                });
            }

            componentDidUpdate() {
                lifeCycle['didUpdate'].forEach((fn) => {
                    typeof fn === 'function' && fn();
                });
            }

            componentDidMount() {
                lifeCycle['didMount'].forEach((fn) => {
                    typeof fn === 'function' && fn();
                });
            }

            render() {
                return (
                    <CustomComponent 
                        action={action}
                        state={this.state}
                        props={this.props}
                    />
                )
            }
        }

    }
}