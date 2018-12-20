import React, { Component } from 'react'
import axios from 'axios'

class ContactForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			values: {
				name: '',
				email: '',
				phone: '',
				comment: ''
			},
			errors: {
				name: '',
				email: '',
				phone: '',
				comment: ''
			},
			formValid: false,
			success: false
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
				: 'That isn\'t an email, you know what an email is right?'
			case 'phone': return !value || /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/.test(value)
				? ''
				: 'That phone number doesn\'t work, try harder or leave it empty like a boss'
			case 'comment': return value && (value.length > 5)
				? ''
				: 'If you don\'t enter a real message, how will I know what you want?'

			default: return 'Error: we did not find this field'
		}
	}

	handleChange(e) {
		const { state: { values, errors }, validateField } = this
		const { name, value } = e.target
		const newValues = { ...values, [name]: value }
		let formValid = true

		//validate all fields
		for (let key in newValues) {
			if (validateField(key, newValues[key])) formValid = false
		}

		this.setState({
			errors: { ...errors, [name]: validateField(name, value) },
			values: newValues,
			formValid
		})
	}

	async handleSubmit(e) {
		e.preventDefault()

		// const { data: res } = await axios.post('/contact', this.state.fields)
        
		// await res.status && (res.status === 'failure' || res.status === 'error')
		// 	? alert('failed')
		// 	: this.setState({ success: true })

		this.setState({ success: true })
	}

	render() {
		const { state: { values, errors, success, formValid }, handleSubmit, handleChange } = this

		return success
			? <h4 className="message">Hey thanks.</h4>

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
					<input type="text" name="phone" id="phone" value={ values.phone } placeholder="phone (optional)" onChange={ handleChange } />
					<small className={ `error ${ errors.phone ? 'error' : 'invisible' }`}>{ errors.phone }</small>
				</div>
				<div>
					<textarea name="comment" id="comment" value={ values.comment } placeholder="message" onChange={ handleChange }  />
					<small className={ `error ${ errors.comment ? 'error' : 'invisible' }`}>{ errors.comment }</small>
				</div>
				<button type="submit" disabled={ !formValid }>Send Message</button>
			</form>
	}
}

export default ContactForm