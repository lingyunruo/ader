
import React, {Component} from 'react';
import BaseComponent from './BaseComponent';

export default (config = {}) => {

    return (renderFn) => {

        let {
            actions = {}, 
            state = {}, 
            ...others
        } = config;

        class CustomComponentWithAction extends BaseComponent {
            constructor(props) {
                super(props);
                
                this.state = state;

                this.loadActions();
            }

            actions = actions
    
            render() {
                const Wrapper = renderFn({
                    props: this.props, 
                    action: this.action, 
                    state: this.state
                }, others);
                return Wrapper;
            }
        }

        return CustomComponentWithAction;
    }
}