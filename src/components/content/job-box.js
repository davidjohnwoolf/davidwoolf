import React from 'react'
import ContentBox from './content-box'

const jobBox = (Component) => {

	const header = (company, website, dates) => {
		return (
			<h4>
				<a href={ website } target="_blank">{ company }</a>
				<span className="dates">{ dates }</span>
			</h4>
		)
	}

	const reference = (refTitle, refPhone) => {
		return (
			<div>
				<h4>Reference</h4>
				<h5>{ refTitle }</h5>
				<p>
					<a href={ `tel:${ refPhone }` }>
						{ refPhone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3') }
					</a>
				</p>
			</div>
		)
	}

	return ({ company, website, dates, hasRef, refTitle, refPhone, ...props }) => {
		return (
			<Component
				header={ header(company, website, dates) }
				footer={ !!hasRef && reference(refTitle, refPhone) }
				{ ...props }
			/>
		)
	}
}

export default jobBox(ContentBox)