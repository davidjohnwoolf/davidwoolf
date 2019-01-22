import React from 'react'
import ContentBox from './content-box'

const projectBox = (Component) => {

	const header = (website, github) => {
		return (
			<h4>
				{ website ? <a href={ website } target="_blank">Website</a> : '' }
				{ github ? <a href={ github } target="_blank">Github</a> : '' }
			</h4>
		)
	}

	return ({ website, github, ...props }) => {
		return (
			<Component
				header={ header(website, github) }
				{ ...props }
			/>
		)
	}
}

export default projectBox(ContentBox)