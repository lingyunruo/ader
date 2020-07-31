import {render} from './render';

import {Model, createStore, connect} from './model';

let data = {};

let setData = (key, value) => {
    data[key] = value
};

let getData = (key) => {
    return data[key]
}

let finalStart = createStore({setData, getData});
let finalRender = render({setData, getData});
let finalConnect = connect({setData, getData})

export {
    finalRender as render,
    Model,
    finalStart as createStore,
    finalConnect as connect
}