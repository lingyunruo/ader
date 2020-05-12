import React from 'react';
import {render} from 'react-dom';


import {createStore, connect} from '../src/frame';
import Home from './home';
import Model from './model';
import Model2 from './model2';

let store = createStore([Model, Model2]);

const HomePage = connect(Home);

render(<HomePage store={store}/>, document.getElementById('app'));