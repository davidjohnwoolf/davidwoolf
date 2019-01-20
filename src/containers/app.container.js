import React from 'react'

const AppContainer = ({ children, path, previousPath, nextPath }) => {

	return (
		<div className={ `app-container ${ path.slice(2) || 'home' }` }>
			<div className="fixed-bg"></div>
			<header className="header">

				<div className="page-heading">
					<h1><a href="#/"><span className="name-first">David</span><span className="name-last">Woolf</span></a></h1>
					<h2 className="mobile">{ previousPath ? path.slice(2, 3).toUpperCase() + path.slice(3) : 'Home' }</h2>
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
				{ children }

				<footer className="footer mobile">
					<nav>
						<a className={ `previous${ !previousPath ? ' hidden' : '' }` } href={ previousPath }>&#10094;</a>
						<ul>
							<li><a className="link-home" href="#/"><span><span className="hidden">Home</span></span></a></li>
							<li><a className="link-skills" href="#/skills"><span><span className="hidden">Skills</span></span></a></li>
							<li><a className="link-experience" href="#/experience"><span><span className="hidden">Experience</span></span></a></li>
							<li><a className="link-projects" href="#/projects"><span><span className="hidden">Projects</span></span></a></li>
							<li><a className="link-contact" href="#/contact"><span><span className="hidden">Contact</span></span></a></li>
						</ul>
						<a className={ `next${ !nextPath ? ' hidden' : '' }` }  href={ nextPath }>&#10095;</a>
					</nav>
				</footer>
			</div>
		</div>
	)
}

export default AppContainer