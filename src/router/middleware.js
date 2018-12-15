//think of a better name
export const setSlideDirectionOnProps = (data) => {

	if (!data.oldRoute) return data

	const findPathIndex = (path) => data.routes.findIndex(c => c.path === path)

	//maybe dont mutate this
	data.props.slideForward = findPathIndex(data.newRoute.path) > findPathIndex(data.oldRoute.path)

	return data
}

export const addPathToProps = (data) => {

	const findPathIndex = (path) => data.routes.findIndex(c => c.path === path)

	//maybe dont mutate this
	data.props.path = data.newRoute.path

	return data
}