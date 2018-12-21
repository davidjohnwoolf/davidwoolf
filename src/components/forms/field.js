import React, { Component } from 'react'

const Field = ({ type, name, value, error, handler }) => {

	const input = type !== 'textarea'
		? <input type={ type } name={ name } placeholder={ name } value={ value } onChange={ handler } />
		: <textarea name={ name } placeholder={ name } value={ value } onChange={ handler }  />

	return (
		<div>
			{ input }
			<small className={ error ? 'form-error' : 'invisible' }>{ error }</small>
		</div>
	)
}

export default Field