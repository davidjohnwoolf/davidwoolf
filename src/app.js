//import css and image for webpack
require('../sass/base.scss')
require('../assets/img/david-john-woolf.jpg')
require('../assets/icons/favicon.png')
require('../assets/icons/favicon.ico')
require('../assets/icons/apple-touch-icon.png')
require('../assets/icons/mstile.png')

import React from 'react'
import ReactDOM from 'react-dom'

import createRouter from './router/create-router'
import { addSlideDirectionToProps, addPathsToProps } from './router/middleware'

import AppContainer from './components/AppContainer'

import ErrorBoundary from './components/errors/ErrorBoundary'
import PageNotFound from './components/errors/PageNotFound'

import HomePage from './components/pages/HomePage'
import ProjectsPage from './components/pages/ProjectsPage'
import SkillsPage from './components/pages/SkillsPage'
import ExperiencePage from './components/pages/ExperiencePage'
import ContactPage from './components/pages/ContactPage'

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

	props.path
		? document.title = `David Woolf - ${ props.path.slice(2, 3).toUpperCase() + props.path.slice(3) || 'Home' }`
		: document.title = 'David Woolf - Page Not Found'

	return ReactDOM.render(
		<ErrorBoundary>
			{
				props.pageNotFound
					? <PageNotFound />
					: (
						<AppContainer { ...props }>
							<Component shouldSlideForward={ props.shouldSlideForward } />
						</AppContainer>
					)
			}
		</ErrorBoundary>,
		document.querySelector('#app')
	)
}

//for initial load
renderRoute(null)

//passes the hashchage event to renderRoute
window.onhashchange = renderRoute