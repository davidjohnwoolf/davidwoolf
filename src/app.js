//import css and image for webpack
require('../sass/base.scss')
require('../assets/img/david-john-woolf.jpg')

import React from 'react'
import ReactDOM from 'react-dom'

import createRouter from './router/create-router'
import { addSlideDirectionToProps, addPathsToProps } from './router/middleware'

import AppContainer from './containers/app.container'

import HomePage from './components/home-page'
import ProjectsPage from './components/projects-page'
import SkillsPage from './components/skills-page'
import ExperiencePage from './components/experience-page'
import ContactPage from './components/contact-page'

const routes = [
	{ path: '#/', component: HomePage },
	{ path: '#/skills', component: SkillsPage },
	{ path: '#/experience', component: ExperiencePage },
	{ path: '#/projects', component: ProjectsPage },
	{ path: '#/contact', component: ContactPage }
]

const router = createRouter({
	routes, middleware: [addPathsToProps, addSlideDirectionToProps]
})

//sends route component to react
const renderRoute = e => {
	const { Component, props } = router(e)

	window.scrollTo(0, 0)

	return ReactDOM.render(
		<AppContainer { ...props }>
			<Component shouldSlideForward={ props.shouldSlideForward} />
		</AppContainer>,
		document.querySelector('#app')
	)
}

//for initial load
renderRoute()

//passes the hashchage event to renderRoute
window.onhashchange = renderRoute