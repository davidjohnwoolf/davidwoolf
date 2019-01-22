import React from 'react'

const ContentBox = ({ title, header, desc, tech, footer }) => {

	return (
		<section>
			<h3>{ title }</h3>
			<div className="section-content">
				<header>{ header }</header>
				<h4>Description</h4>
				<p>{ desc }</p>
				<h4>Technology</h4>
				<p>{ tech }</p>
				{ footer || '' }
			</div>
		</section>
	)
}

export default ContentBox
