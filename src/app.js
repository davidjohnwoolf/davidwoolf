//import css and image for webpack
require('../sass/base.scss')
require('../assets/img/david-woolf.jpg')
require('../assets/img/david-woolf-hover.jpg')

import React from 'react'
import ReactDOM from 'react-dom'

import createRouter from './router/create-router'
import { addSlideDirectionToProps, addPathsToProps } from './router/middleware'

import AppContainer from './containers/app.container'

import Home from './components/home'
import Projects from './components/projects'
import Skills from './components/skills'
import Experience from './components/experience'
import Contact from './components/contact'

const routes = [
	{ path: '/', comp: (props) => <Home props={ props } /> },
	{ path: '/skills', comp: (props) => <Skills props={ props } /> },
	{ path: '/experience', comp: (props) => <Experience props={ props } /> },
	{ path: '/projects', comp: (props) => <Projects props={ props } /> },
	{ path: '/contact', comp: (props) => <Contact props={ props } /> }
]

const router = createRouter({
	routes, container: AppContainer, middleware: [addPathsToProps, addSlideDirectionToProps]
})

//sends router components to react
const renderRoute = e => {
	window.scrollTo(0, 0)
	return ReactDOM.render(router(e), document.querySelector('#app'))
}

//for initial load
renderRoute()

//passes the hashchage event to renderRoute
window.onhashchange = renderRoute