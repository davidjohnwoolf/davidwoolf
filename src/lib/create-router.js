import { pipe } from './helpers'

//what about switch and exact matches?
//maybe try enforcing type on all inputs to avoid errors
//router container
const createRouter = ({ routes, container, middlewares }) => {

	//routes and middlewares must both be arrays

	// extract new and old urls from hashchange event
	const handleHashChange = ({ type, newURL, oldURL }) => {
		if (!type || (type !== 'hashchange')) return console.log('oops')

		const getRoute = url => routes.find(c => c.path === url.split('#')[1])

		const routeAction = {
			route: getRoute(newURL),
			oldRoute: getRoute(oldURL)
		}

		// use async await here for the exit animation or if it is anync middleware
		
		return middlewares ? pipe(...middlewares)(routeAction) : routeAction
	}

	const resolveRoute = e => {
		let routeAction

		e.type === 'hashchange'
			? routeAction = handleHashChange(e)
			: routeAction = { route: routes.find(c => c.path === e.slice(1)) || routes[0] }

		const components = container ? container(routeAction.route.action()) : routeAction.route.action()

		return components
	}

	return { resolveRoute }
}

export default createRouter