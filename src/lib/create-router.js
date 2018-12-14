const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x)

//what about switch and exact matches
//maybe try enforcing type on all inputs to avoid errors
//how to create state
//comment your code where necessary
const createRouter = ({ routes, container, middlewares }) => {

	const handleHashChange = ({ newURL, oldURL }) => {

		const data = { route: routes.find(c => c.path === newURL.split('#')[1]) || routes[0], oldURL }
		
		return middlewares ? pipe(...middlewares)(data) : data
	}

	return {
		resolveRoute: d => {
			let data

			d.type === 'hashchange'
				? data = handleHashChange(d)
				: data = { route: routes.find(c => c.path === d.slice(1)) || routes[0] }

			return container ? container(data.route.action()) : data.route.action()
		}
	}
}

export default createRouter