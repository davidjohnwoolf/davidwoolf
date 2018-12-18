const findPathIndex = (path, route) => route.routes.findIndex(c => c.path === path)

export const addSlideDirectionToProps = (route) => {

	if (!route.oldRoute) return route
	
	const slideForward = findPathIndex(route.newRoute.path, route) > findPathIndex(route.oldRoute.path, route)

	//returns route with slideFoward prop
	return { ...route, props: { ...route.props, slideForward } }
}

export const addPathsToProps = (route) => {

	const pathIndex = findPathIndex(route.newRoute.path, route)

	const previousPath = route.routes[ pathIndex - 1] && `#${ route.routes[ pathIndex - 1].path }`
	const nextPath = route.routes[pathIndex + 1] && `#${ route.routes[pathIndex + 1].path }`

	//returns route with current, previous and next path as props
	return { ...route, props: { ...route.props, path: route.newRoute.path, previousPath, nextPath } }
}