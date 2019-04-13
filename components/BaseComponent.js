import React, {Component} from 'react';

import pubSub from '../pubSub';

class BaseComponent extends Component {

    constructor(props) {
        super(props);

        this.loadActions = this.loadActions.bind(this);
    }

    loadActions() {
        if(this.action === undefined) {
            this.action = {};
        }
        Object.keys(this.actions).map((key) => {
            let action = new this.actions[key](this);
            // 给每个action添加订阅发布
            action.pubSub = pubSub;

            this.action[key] = action
        });
    }

    componentDidMount() {
        if(this.action && typeof this.action === 'object') {
            Object.keys(this.action).map((key) => {
                let action = this.action[key];
                if('didMount' in action && typeof action.didMount === 'function') {
                    action.didMount.call(this.action);
                }
            });
        }
    }

    componentDidUpdate() {
        if(this.action && typeof this.action === 'object') {
            Object.keys(this.action).map((key) => {
                let action = this.action[key];
                if('didUpdate' in action && typeof action.didUpdate === 'function') {
                    action.didUpdate.call(this.action);
                }
            });
        }
    }

    componentWillUnmount() {
        if(this.action && typeof this.action === 'object') {
            Object.keys(this.action).map((key) => {
                let action = this.action[key];
                if('willUnMount' in action && typeof action.didUpdate === 'function') {
                    action.didUpdate.call(this.action);
                }
            });
        }
    }
}

export default BaseComponent;