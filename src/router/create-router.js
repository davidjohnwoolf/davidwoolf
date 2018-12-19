import { pipe } from './utils'

const createRouter = ({ routes, container, middleware }) => {

	//find route with matching path
	const matchURL = url => routes.find(c => c.path === url.split('#')[1]) || routes[0]

	//compose middleware with data
	const applyMiddleware = (data) => middleware ? pipe(...middleware)(data) : data

	return e => {

		//build route data with middleware
		const route = applyMiddleware({
			newRoute: e ? matchURL(e.newURL) : matchURL(window.location.hash),
			oldRoute: e ? matchURL(e.oldURL) : null,
			routes,
			props: {}
		})

		//return route components
		return container
			? container({ child: route.newRoute.comp(), ...route.props })
			: route.newRoute.comp(route.props)
	}
}

export default createRouter