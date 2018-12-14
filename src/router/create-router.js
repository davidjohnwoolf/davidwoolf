import { pipe } from './utils'

//exact params
//enforce type on all inputs
//error handling
//testing

const createRouter = ({ routes, container, middleware }) => {

	const handleHashChange = ({ newURL, oldURL }) => {

		const data = {
			newRoute: routes.find(c => c.path === newURL.split('#')[1]) || routes[0],
			oldRoute: routes.find(c => c.path === oldURL.split('#')[1]) || null,
			routes
		}
		
		return middleware ? pipe(...middleware)(data) : data
	}

	return {
		resolveRoute: e => {
			let data

			e.type === 'hashchange'
				? data = handleHashChange(e)
				: data = { newRoute: routes.find(c => c.path === e.slice(1)) || routes[0] }

			//pass route and props to the container if it exists
			return container ? container(data.newRoute.action(), data.props) : data.newRoute.action(data.props)
		}
	}
}

export default createRouter