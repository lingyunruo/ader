import React from 'react';
import './index.less';

import {render} from '../../../../../index';
import MainAction from '../actions/main';


const HomePage = render({
    actions: {
        ma: MainAction
    },
    state: {
        name: 'ader-example'
    }
})(({props, state, action}) => {
    let description = props.store.getData('main.description').value;

    return (
        <div>
            <label>姓名: </label>
            <span>{state.name}</span>
            <div>
                {description}
            </div>
            <div>
                <label>倒计时：{props.store.getData('main.timeCount').value}秒后会发生什么</label>
            </div>
            <button
                onClick={action.ma.emitAction}
            >
                点击触发action
            </button>
        </div>
    );

});

export default HomePage;