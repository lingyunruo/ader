
import React from 'react';

import {start, connect} from '../../frame/index';


import HomePage from '../container';


import model from '../models/model';

const HomePageWithData = connect(HomePage);


start({
    root: document.getElementById('app'),
    component: <HomePageWithData/>,
    model: model
});
