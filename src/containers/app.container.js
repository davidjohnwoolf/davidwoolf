import React from 'react';

const AppContainer = (child, props) => {
	return (
		<div>
			<header className="site-header">
				<h1>David Woolf</h1>
				<span className="menu-bar">&#9776;</span>
				<nav>
					<ul>
						<li className="nav-home"><a href="#/">Home</a></li>
						<li className="nav-skills"><a href="#/skills">Skills</a></li>
						<li className="nav-experience"><a href="#/experience">Experience</a></li>
						<li className="nav-projects"><a href="#/projects">Projects</a></li>
						<li className="nav-contact"><a href="#/contact">Contact</a></li>
					</ul>
				</nav>
			</header>
			<div>
				{ child }
			</div>
		</div>
	)
}

export default AppContainer;