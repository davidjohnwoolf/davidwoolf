//import css for webpack
require('../sass/base.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import About from './components/about.js'
import Skills from './components/skills.js'
import Experience from './components/experience.js'
import Projects from './components/projects.js'
import Contact from './components/contact.js'

ReactDOM.render(
	<Router>
		<div>
			<header className="site-header">
				<h1>David Woolf</h1>
				<span className="menu-bar">&#9776;</span>
				<nav>
					<ul>
						<li className="nav-about"><NavLink activeClassName="selected" to="/about">About</NavLink></li>
						<li className="nav-skills"><NavLink activeClassName="selected" to="/skills">Skills</NavLink></li>
						<li className="nav-experience"><NavLink activeClassName="selected" to="/experience">Experience</NavLink></li>
						<li className="nav-projects"><NavLink activeClassName="selected" to="/projects">Projects</NavLink></li>
						<li className="nav-contact"><NavLink activeClassName="selected" to="/contact">Contact</NavLink></li>
					</ul>
				</nav>
			</header>
			<Switch>
				<Route exact path="/about" component={ About } />
				<Route exact path="/skills" component={ Skills } />
				<Route exact path="/experience" component={ Experience } />
				<Route exact path="/projects" component={ Projects } />
				<Route exact path="/contact" component={ Contact } />
			</Switch>
		</div>
	</Router>,
    document.querySelector('#app')
);