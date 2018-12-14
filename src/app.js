//import css for webpack
require('../sass/base.scss');

import React from 'react';
import ReactDOM from 'react-dom';

//import AppContainer from './containers/app.container';

render(history.getCurrentLocation());

window.onhashchange = router.routeChangeHandler({ type, newURL, oldURL })

ReactDOM.render(
	<AppContainer />,
	document.querySelector('#app')
)

/*
<Router>
		<div>
			<header className="site-header">
				<h1>David Woolf</h1>
				<span className="menu-bar">&#9776;</span>
				<nav>
					<ul>
						<li className="nav-home">
							<CustomLink url="/">Home</CustomLink>
						</li>
						<li className="nav-skills">
							<CustomLink url="/skills">Skills</CustomLink>
						</li>
						<li className="nav-experience">
							<CustomLink url="/experience">Experience</CustomLink>
						</li>
						<li className="nav-projects">
							<CustomLink url="/projects">Projects</CustomLink>
						</li>
						<li className="nav-contact">
							<CustomLink url="/contact">Contact</CustomLink>
						</li>
					</ul>
				</nav>
			</header>
			<Switch>
				<Route path="/" component={ Home } />
				<Route path="/skills" component={ Skills } />
				<Route path="/experience" component={ Experience } />
				<Route path="/projects" component={ Projects } />
				<Route path="/contact" component={ Contact } />
			</Switch>
		</div>
	</Router>
	*/