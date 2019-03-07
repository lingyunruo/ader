
import React, {Component} from 'react';


import BaseComponent from '../components/BaseComponent';

export default (config = {}) => {

    return (renderFn) => {

        let {
            actions = {}, 
            state = {}, 
            init = () => {},
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
                return renderFn({
                        props: this.props, 
                        action: this.action, 
                        state: this.state
                    },others)
            }
        }

        return CustomComponentWithAction;
    }
}