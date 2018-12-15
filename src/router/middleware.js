//think of a better name
export const addSlideDirectionToProps = (route) => {

	if (!route.oldRoute) return route

	const findPathIndex = (path) => route.routes.findIndex(c => c.path === path)

	//maybe dont mutate this
	route.props.slideForward = findPathIndex(route.newRoute.path) > findPathIndex(route.oldRoute.path)

	return route
}

export const addPathToProps = (route) => {

	//maybe dont mutate this
	route.props.path = route.newRoute.path

	return route
}