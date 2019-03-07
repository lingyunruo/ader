import React, {Component} from 'react';

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
            this.action[key] = new this.actions[key](this);
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
}

export default BaseComponent;