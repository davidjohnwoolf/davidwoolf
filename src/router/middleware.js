export const addSlideDirectionToProps = (route) => {

	if (!route.oldRoute) return route

	const findPathIndex = (path) => route.routes.findIndex(c => c.path === path)
	
	const slideForward = findPathIndex(route.newRoute.path) > findPathIndex(route.oldRoute.path)

	//returns route with slideFoward prop
	return { ...route, props: { ...route.props, slideForward } }
}

export const addPathToProps = (route) => {

	//returns route with current path prop
	return { ...route, props: { ...route.props, path: route.newRoute.path } }
}