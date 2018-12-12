import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import CustomLink from './custom-link';

import Home from '../components/home';
import Skills from '../components/skills';
import Experience from '../components/experience';
import Projects from '../components/projects';
import Contact from '../components/contact';

class AppContainer extends React.Component {

	constructor(props) {
		super(props);

		this.state = { transition: false, path: undefined, dest: undefined };

		this.startHandler = this.startHandler.bind(this);
		this.resetHandler = this.resetHandler.bind(this);
	}

	startHandler(dest, path) {
		const paths = ['/', '/skills', '/experience', '/projects', '/contact'];

		console.log('start path', path)
		console.log('start dest', dest)

		if (dest !== path) {
			this.setState({
				dest: dest,
				path: path,
				transition: true
			});
		}
	}

	resetHandler() {
		console.log('before reset', this.state);
		this.setState({ transition: false, path: undefined, dest: undefined });
		console.log('after reset', this.state);
	}

	render() {
		return (
			<Router history={ this.history }>
				<div>
					<header className="site-header">
						<h1>David Woolf</h1>
						<span className="menu-bar">&#9776;</span>
						<nav>
							<ul>
								<li className="nav-home">
									<CustomLink startHandler={ (path) => this.startHandler('/', path) }>Home</CustomLink>
								</li>
								<li className="nav-skills">
									<CustomLink startHandler={ (path) => this.startHandler('/skills', path) }>Skills</CustomLink>
								</li>
								<li className="nav-experience">
									<CustomLink startHandler={ (path) => this.startHandler('/experience', path) }>Experience</CustomLink>
								</li>
								<li className="nav-projects">
									<CustomLink startHandler={ (path) => this.startHandler('/projects', path) }>Projects</CustomLink>
								</li>
								<li className="nav-contact">
									<CustomLink startHandler={ (path) => this.startHandler('/contact', path) }>Contact</CustomLink>
								</li>
							</ul>
						</nav>
					</header>
					<Switch>
						<Route exact path="/" render={ () => <Home resetHandler={ this.resetHandler } startData={ this.state } />  } />
						<Route path="/skills" render={ () => <Skills resetHandler={ this.resetHandler } startData={ this.state } /> } />
						<Route path="/experience" render={ () => <Experience resetHandler={ this.resetHandler } startData={ this.state } /> } />
						<Route path="/projects" render={ () => <Projects resetHandler={ this.resetHandler } startData={ this.state } /> } />
						<Route path="/contact" render={ () => <Contact resetHandler={ this.resetHandler } startData={ this.state } /> } />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default AppContainer;

/*

<li><span onClick={ () => this.transitionHandler('/') }>Home</span></li>
<li><span onClick={ () => this.transitionHandler('/skills') }>Skills</span></li>
<li><span onClick={ () => this.transitionHandler('/experience') }>Experience</span></li>
<li><span onClick={ () => this.transitionHandler('/projects') }>Projects</span></li>
<li><span onClick={ () => this.transitionHandler('/contact') }>Contact</span></li>

<li className="nav-home"><NavLink activeClassName="selected" exact to="/">Home</NavLink></li>
<li className="nav-skills"><NavLink activeClassName="selected" to="/skills">Skills</NavLink></li>
<li className="nav-experience"><NavLink activeClassName="selected" to="/experience">Experience</NavLink></li>
<li className="nav-projects"><NavLink activeClassName="selected" to="/projects">Projects</NavLink></li>
<li className="nav-contact"><NavLink activeClassName="selected" to="/contact">Contact</NavLink></li>

*/