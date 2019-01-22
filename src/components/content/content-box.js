import React from 'react'

const ContentBox = ({ title, desc, tech, hasRef, refTitle, refPhone, children }) => {

	const formattedRefPhone = hasRef && refPhone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')

	return (
		<section>
			<h3>{ title }</h3>
			<div className="section-content">
				{ children }
				<h4>Description</h4>
				<p>{ desc }</p>
				<h4>Technology</h4>
				<p>{ tech }</p>

				{
					hasRef
						? (
							<div>
								<h4>Reference</h4>
								<h5>{ refTitle }</h5>
								<p>
									<a href={ `tel:${ refPhone }` }>{ formattedRefPhone }</a>
								</p>
							</div>
						) : ''
				}
			</div>
		</section>
	)
}

export default ContentBox