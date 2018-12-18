import React from 'react'

const AppContainer = (child, { path, slideForward, previousPath, nextPath }) => {

	return (
		<div className={ `app-container ${ path.slice(1) || 'home' }` }>
			<div className="fixed-bg"></div>
			<header className="header">

				<div className="page-heading">
					<h1><a href="#/">David Woolf</a></h1>
					<h2 className="mobile">{ previousPath ? path.slice(1, 2).toUpperCase() + path.slice(2) : 'Home' }</h2>
				</div>

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
					<a className="mobile previous" disabled={ !previousPath } href={ previousPath }>&#10094;</a>
					<nav className="mobile">
						<ul>
							<li><a title="Footer Link Home" className="link-home" href="#/"><span></span></a></li>
							<li><a title="Footer Link Skills" className="link-skills" href="#/skills"><span></span></a></li>
							<li><a title="Footer Link Experience" className="link-experience" href="#/experience"><span></span></a></li>
							<li><a title="Footer Link Projects" className="link-projects" href="#/projects"><span></span></a></li>
							<li><a title="Footer Link Contact" className="link-contact" href="#/contact"><span></span></a></li>
						</ul>
					</nav>
					<a className="mobile next" disabled={ !nextPath }  href={ nextPath }>&#10095;</a>
				</div>
			</div>
		</div>
	)
}

export default AppContainer