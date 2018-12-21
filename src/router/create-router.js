import { pipe } from './utils'

const createRouter = ({ routes, middleware }) => {

	//find route with matching path
	const matchURL = url => routes.find(c => c.path === '#' + url.split('#')[1]) || routes[0]

	//compose middleware with data
	const applyMiddleware = (data) => middleware ? pipe(...middleware)(data) : data

	return e => {

		//build route data with middleware
		const route = applyMiddleware({
			newRoute: e ? matchURL(e.newURL) : matchURL(window.location.hash),
			oldRoute: e ? matchURL(e.oldURL) : null,
			props: {},
			routes
		})

		//return route component and props
		return { Component: route.newRoute.component, props: route.props }
	}
}

export default createRouter