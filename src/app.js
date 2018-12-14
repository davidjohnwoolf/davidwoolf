//import css for webpack
require('../sass/base.scss');

//modules
import React from 'react';
import ReactDOM from 'react-dom';

//lib
import createRouter from './lib/create-router'

//containers
import AppContainer from './containers/app.container';

//components
import Home from './components/home';
import Projects from './components/projects';
import Skills from './components/skills';
import Experience from './components/experience';
import Contact from './components/contact';

const log1 = action => {
	console.log('middleware 1 running...')
	return action
}

const log2 = action => {
	console.log('middleware 2 running...')
	return action
}

const routes = [
	{ path: '/', action: () => <Home /> },
	{ path: '/skills', action: () => <Skills /> },
	{ path: '/experience', action: () => <Experience /> },
	{ path: '/projects', action: () => <Projects /> },
	{ path: '/contact', action: () => <Contact /> }
]

//initialize router
const router = createRouter({ routes, container: AppContainer, middlewares: [log1, log2] })

const render = e => ReactDOM.render(router.resolveRoute(e), document.querySelector('#app'));

//initial render
render(window.location.hash)

//render on hash change
window.onhashchange = render