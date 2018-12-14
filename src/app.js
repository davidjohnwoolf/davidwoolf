//import css for webpack
require('../sass/base.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import createRouter from './lib/create-router'

import AppContainer from './containers/app.container';

import Home from './components/home';
import Projects from './components/projects';
import Skills from './components/skills';
import Experience from './components/experience';
import Contact from './components/contact';

const routes = [
	{ path: '/', action: () => <Home /> },
	{ path: '/skills', action: () => <Skills /> },
	{ path: '/experience', action: () => <Experience /> },
	{ path: '/projects', action: () => <Projects /> },
	{ path: '/contact', action: () => <Contact /> }
]

const router = createRouter({ routes, container: AppContainer })

const render = e => ReactDOM.render(router.resolveRoute(e), document.querySelector('#app'))

render(window.location.hash)

window.onhashchange = render