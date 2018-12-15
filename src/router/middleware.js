export const addSlideDirectionToProps = (route) => {

	if (!route.oldRoute) return route

	const findPathIndex = (path) => route.routes.findIndex(c => c.path === path)

	const slideForward = findPathIndex(route.newRoute.path) > findPathIndex(route.oldRoute.path)

	return { ...route, props: { ...route.props, slideForward } }
}

export const addPathToProps = (route) => {

	return { ...route, props: { ...route.props, path: route.newRoute.path } }
}