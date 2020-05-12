
import {render, createStore, connect} from '../src/frame';


import React from 'react';

class MainModel {
    name = 'childModel'
    data = {
        name: 'hello world'
    }
}

let store = createStore([MainModel]);


let Home2 = render()(({props, state, action}) => {
    return (
        <div>{props.childModel.name}</div>
    );

})

let HomeConnect = connect(Home2);

export default (props) => {
    return (
        <HomeConnect
            {...props}
            store={store}
        />
    );
}