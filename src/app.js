//import css for webpack
require('../sass/base.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';

import About from './components/about.js'
import Skills from './components/skills.js'
import Experience from './components/experience.js'
import Projects from './components/projects.js'

ReactDOM.render(
	<Router>
		<div>
			<header>
				<h1>David Woolf</h1>
				<nav>
					<ul>
						<li><Link to='/about'>About</Link></li>
						<li><Link to='/skills'>Skills</Link></li>
						<li><Link to='/experience'>Experience</Link></li>
						<li><Link to='/projects'>Projects</Link></li>
					</ul>
				</nav>
			</header>
			<Switch>
				<Route exact path='/about' component={ About } />
				<Route exact path='/skills' component={ Skills } />
				<Route exact path='/experience' component={ Experience } />
				<Route exact path='/projects' component={ Projects } />
			</Switch>
		</div>
	</Router>,
    document.querySelector('#app')
);