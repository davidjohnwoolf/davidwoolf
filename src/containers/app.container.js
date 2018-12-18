import React from 'react'

const AppContainer = (child, { path, slideForward, previousPath, nextPath }) => {

	return (
		<div className={ `app-container ${ path.slice(1) || 'home' }` }>
			<div className="fixed-bg"></div>
			<header className="header">
				<a className="mobile previous" disabled={ !previousPath } href={ previousPath }>&#10094;</a>

				<div className="page-heading">
					<h1><a href="#/">David Woolf</a></h1>
					<h2 className="mobile">{ previousPath ? path.slice(1, 2).toUpperCase() + path.slice(2) : 'Home' }</h2>
				</div>

				<a className="mobile next" disabled={ !nextPath }  href={ nextPath }>&#10095;</a>

				<nav className="not-mobile">
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

				<div className="footer">
					<nav className="mobile">
						<ul>
							<li><a className="link-home" href="#/"></a></li>
							<li><a className="link-skills" href="#/skills"></a></li>
							<li><a className="link-experience" href="#/experience"></a></li>
							<li><a className="link-projects" href="#/projects"></a></li>
							<li><a className="link-contact" href="#/contact"></a></li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	)
}

export default AppContainer