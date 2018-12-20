import React, { Component } from 'react'
import axios from 'axios'

class ContactForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			values: {
				name: '',
				email: '',
				comment: ''
			},
			errors: {
				name: '',
				email: '',
				comment: ''
			},
			isValid: false,
			didSucceed: false
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	validateField(name, value) {
		
		switch(name) {
			case 'name': return value && (value.length > 1)
				? ''
				: 'Please enter a valid name or I will be VERY angry with you'
			case 'email': return value && /^[^@]+@[^@]+\.[^@]+$/.test(value)
				? ''
				: 'That isn\'t an email... you know what an email is right?'
			case 'comment': return value && (value.length > 5)
				? ''
				: 'Please enter a real message or you will regret it forever'

			default: return 'Error: we did not find this field'
		}
	}

	handleChange(e) {
		const { state: { values, errors }, validateField } = this
		const { name, value } = e.target
		const newValues = { ...values, [name]: value }
		let isValid = true

		//validate all fields
		for (let key in newValues) {
			if (validateField(key, newValues[key])) isValid = false
		}

		this.setState({
			errors: { ...errors, [name]: validateField(name, value) },
			values: newValues,
			isValid
		})
	}

	async handleSubmit(e) {
		e.preventDefault()

		// const { data: res } = await axios.post('/contact', this.state.fields)
        
		// await res.status && (res.status === 'failure' || res.status === 'error')
		// 	? alert('failed')
		// 	: this.setState({ didSucceed: true })

		this.setState({ didSucceed: true })
	}

	render() {
		const { state: { values, errors, didSucceed, isValid }, handleSubmit, handleChange } = this

		return didSucceed
			? <div>
				<p className="message">Hey thanks!</p>
				<p className="small-message">I will get back to you soon.</p>
			</div>

			: <form className="contact-form" onSubmit={ handleSubmit }>
				<div>
					<input type="text" name="name" id="name" value={ values.name } placeholder="name" onChange={ handleChange } />
					<small className={ `error ${ errors.name ? 'error' : 'invisible' }`}>{ errors.name }</small>
				</div>
				<div>
					<input type="email" name="email" id="email" value={ values.email } placeholder="email" onChange={ handleChange } />
					<small className={ `error ${ errors.email ? 'error' : 'invisible' }`}>{ errors.email }</small>
				</div>
				<div>
					<textarea name="comment" id="comment" value={ values.comment } placeholder="message" onChange={ handleChange }  />
					<small className={ `error ${ errors.comment ? 'error' : 'invisible' }`}>{ errors.comment }</small>
				</div>
				<button type="submit" disabled={ !isValid }>Send Message</button>
			</form>
	}
}

export default ContactForm