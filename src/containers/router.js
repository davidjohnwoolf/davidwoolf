const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x)

const actionCreater = (props, component) => 

//what about switch and exact matches?
const routes = [
	{ path: '/', render: () => <Home /> },
	{ path: '/skills', render: () => <Skills /> },
	{ path: '/experience', render: () => <Experience /> },
	{ path: '/projects', render: () => <Projects /> },
	{ path: '/contact', render: () => <Contact /> }
]

//maybe try enforcing type on all inputs to avoid errors
//router container
const createRouter = (routes, middlewares) => {

	//routes and middlewares must both be arrays

	const state = initialState

	return {

		dispatch: action => middlewares ? pipe(...middlewares)(action) : action,

		// extract new and old urls from hashchange event
		routeChangeHandler: ({ type, newURL, oldURL }) => {
			if (!type || (type !== 'hashchange')) return error

			const getPath = url => url.split('#')[2]

			const route = routes.find((c) => c.path === getPath(newUrl))

			const routeAction = {
				newPath: route.path || null,
				oldPath: getPath(oldURL),
				render: route.render
			}

			// use async await here for the exit animation or if it is anync middleware
			
			return this.dispatch(routeAction)
		},

		//return a copy of the state
		getState: () => JSON.parse(JSON.stringify(state)),

		//replace the state
		setState: () => 
	}
}

//middleware
const slideRoute = next => action => {
	//create route array
	//determine if forward or backwards
	//update state with direction
	//syncronous exit animation
	return next(action)
}

//initialize router
const router = createRouter(routes, [slideRoute])

window.onhashchange = router.routeChangeHandler({ type, newURL, oldURL })