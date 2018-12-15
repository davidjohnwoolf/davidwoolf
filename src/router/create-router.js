import { pipe } from './utils'

//exact params
//enforce type on all inputs
//error handling (particularly but not only wrong hash changes)
//automated testing
//make actions new data as they pass through middleware, don't mutate existing actions
//try not to repeat yourself with the middleware and new route declarations and data stuff
//rethink naming (particularly, you are using action for both route actions and middleware)
//cut unecessary parts and simplify
//check that it is all functional and stateless
//make everything that can be private private

const createRouter = ({ routes, container, middleware }) => {

	const matchURL = url => routes.find(c => c.path === url.split('#')[1] || null)

	const applyMiddleware = (data) => middleware ? pipe(...middleware)(data) : data

	return e => {

		let data = applyMiddleware({
			newRoute: e ? matchURL(e.newURL) : matchURL(window.location.hash),
			oldRoute: e ? matchURL(e.oldURL) : null,
			routes,
			props: {}
		})

		//pass route and props to the container if it exists
		return container
			? container(data.newRoute.render(), data.props)
			: data.newRoute.render(data.props)
	}
}

export default createRouter