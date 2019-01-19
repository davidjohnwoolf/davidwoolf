import { pipe } from './utils'

const createRouter = ({ routes, middleware, PageNotFound }) => {

	//find route with matching path or return null
	const matchURL = url => routes.find(c => (!url ? routes[0] : c.path === '#' + url.split('#')[1]) || null)

	//compose middleware with data
	const applyMiddleware = (data) => middleware ? pipe(...middleware)(data) : data

	return e => {

		const newRoute = e ? matchURL(e.newURL) : matchURL(window.location.hash)

		if (!newRoute) return { Component: PageNotFound, props: { pageExists: false } }

		//build route data with middleware if route exists
		const route = applyMiddleware({
			newRoute,
			oldRoute: e ? matchURL(e.oldURL) : null,
			props: { pageExists: true },
			routes
		})

		//return route component and props
		return { Component: route.newRoute.component, props: route.props }
	}
}

export default createRouter