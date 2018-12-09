//import css for webpack
require('../sass/base.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import About from './components/about.js'

ReactDOM.render(
    <About />,
    document.querySelector('#app')
);