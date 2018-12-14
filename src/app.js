//import css for webpack
require('../sass/base.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import createRouter from './router/create-router'
import { slideMiddleware } from './router/middleware'

import AppContainer from './containers/app.container';

import Home from './components/home';
import Projects from './components/projects';
import Skills from './components/skills';
import Experience from './components/experience';
import Contact from './components/contact';

const routes = [
	{ path: '/', action: (props) => <Home props={ props } /> },
	{ path: '/skills', action: (props) => <Skills props={ props } /> },
	{ path: '/experience', action: (props) => <Experience props={ props } /> },
	{ path: '/projects', action: (props) => <Projects props={ props } /> },
	{ path: '/contact', action: (props) => <Contact props={ props } /> }
]

const router = createRouter({ routes, container: AppContainer, middleware: [slideMiddleware] })

const render = e => ReactDOM.render(router.resolveRoute(e), document.querySelector('#app'))

render(window.location.hash)

window.onhashchange = render