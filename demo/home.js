import React from 'react';

import {render} from '../src/frame';
import Action from './action';
import su from './sunsunaction';
import ChildHome from './home2';

export default render({
    actions: {
        main: Action,
        su: su
    },
    state: {
        name: 'hhh'
    }
})(({action, state, props}) => {
    // console.log(props, '0-0-0-0--0-0-===');
    return (
        <div>
            home  page
            <span 
                onClick={action.main.goAlert}
            >
                点我-{state.name}
            </span>
            <div>{props.main.hello}</div>
            <div>{state.name}</div>
            <div>{props.main2.mmm}</div>
            <ChildHome />
        </div>
    )
});