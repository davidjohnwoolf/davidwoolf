//import css and image for webpack
require('../sass/base.scss')
require('../assets/img/david-john-woolf.jpg')

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
	{ path: '#/', component: Home },
	{ path: '#/skills', component: Skills },
	{ path: '#/experience', component: Experience },
	{ path: '#/projects', component: Projects },
	{ path: '#/contact', component: Contact }
]

const router = createRouter({
	routes, middleware: [addPathsToProps, addSlideDirectionToProps]
})

//sends router components to react
const renderRoute = e => {
	const { Component, props } = router(e)

	console.log(props)
	window.scrollTo(0, 0)

	return ReactDOM.render(
		<AppContainer { ...props }>
			<Component shouldSlideForward={ props.shouldSlideForward} />
		</AppContainer>,
	document.querySelector('#app'))
}

//for initial load
renderRoute()

//passes the hashchage event to renderRoute
window.onhashchange = renderRoute