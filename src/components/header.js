import React from 'react';
import { withRouter } from 'react-router';

class Header extends React.Component {

	constructor(props) {
		super(props);

		//console.log(props.test)

		this.state = {
			//transition direction, true is left, false is right
			leaveRight: true
		}

		//this.transitionHandler = this.transitionHandler.bind(this);
	}

	/*transitionHandler(dest) {
		const path = this.props.location.pathname;
		const leaveRight = this.state.leaveRight;

		const paths = ['/', '/skills', '/experience', '/projects', '/contact'];

		console.log(this.state.leaveRight, ' before')

		if (dest !== path) this.setState({ leaveRight: (paths.indexOf(dest) > paths.indexOf(path)) });

		console.log(this.state.leaveRight, ' after');

		this.props.history.push(dest);
	}*/

	render() {
		return (
			<header className="site-header">
				<h1>David Woolf</h1>
				<span className="menu-bar">&#9776;</span>
				<nav>
					<ul>
						<li><span onClick={ () => this.transitionHandler('/') }>Home</span></li>
						<li><span onClick={ () => this.transitionHandler('/skills') }>Skills</span></li>
						<li><span onClick={ () => this.transitionHandler('/experience') }>Experience</span></li>
						<li><span onClick={ () => this.transitionHandler('/projects') }>Projects</span></li>
						<li><span onClick={ () => this.transitionHandler('/contact') }>Contact</span></li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default withRouter(Header);

/*
<li className="nav-home"><NavLink activeClassName="selected" exact to="/">Home</NavLink></li>
						<li className="nav-skills"><NavLink activeClassName="selected" to="/skills">Skills</NavLink></li>
						<li className="nav-experience"><NavLink activeClassName="selected" to="/experience">Experience</NavLink></li>
						<li className="nav-projects"><NavLink activeClassName="selected" to="/projects">Projects</NavLink></li>
						<li className="nav-contact"><NavLink activeClassName="selected" to="/contact">Contact</NavLink></li>
*/