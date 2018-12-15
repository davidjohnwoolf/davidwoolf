import React from 'react';

const AppContainer = (child, props) => {

	return (
		<div className={ `app-container ${ props.path.slice(1) || 'home' }` }>
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
				{ React.cloneElement(child, { ...props }) }
			</div>
		</div>
	)
}

export default AppContainer