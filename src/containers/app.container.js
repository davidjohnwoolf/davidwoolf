import React from 'react';

const AppContainer = (child, { path, slideForward }) => {

	return (
		<div className={ `app-container ${ path.slice(1) || 'home' }` }>
			<div className="fixed-bg"></div>
			<header className="header">
				<h1>David Woolf</h1>
				<span className="menu-bar">&#9776;</span>
				<nav>
					<ul>
						<li><a className="link-home" href="#/">Home</a></li>
						<li><a className="link-skills" href="#/skills">Skills</a></li>
						<li><a className="link-experience" href="#/experience">Experience</a></li>
						<li><a className="link-projects" href="#/projects">Projects</a></li>
						<li><a className="link-contact" href="#/contact">Contact</a></li>
					</ul>
				</nav>
			</header>
			<div>
				{ React.cloneElement(child, { slideForward }) }
			</div>
		</div>
	)
}

export default AppContainer