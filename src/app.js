//import css for webpack
require('../sass/base.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import About from './components/about.js'
import Skills from './components/skills.js'
import Experience from './components/experience.js'
import Projects from './components/projects.js'

ReactDOM.render(
	<Router>
		<Switch>
			<Route exact path='/about' component={ About } />
			<Route exact path='/skills' component={ Skills } />
			<Route exact path='/experience' component={ Experience } />
			<Route exact path='/projects' component={ Projects } />
		</Switch>
	</Router>,
    document.querySelector('#app')
);