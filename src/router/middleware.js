export const slideMiddleware = (action) => {

	const findPathIndex = (path) => action.routes.findIndex(c => c.path === path)

	const slideForward = findPathIndex(action.newRoute.path) > findPathIndex(action.oldRoute.path)

	return { ...action, props: { slideForward } }
}