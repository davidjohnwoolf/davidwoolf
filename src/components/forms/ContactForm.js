import React, { Component } from 'react'
import axios from 'axios'

import Field from './Field'

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
			postStatus: false
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(e) {
		const { values: oldValues, errors } = this.state
		const { name, value } = e.target
		const values = { ...oldValues, [name]: value }

		let isValid = true

		const validateField = (name, value) => {
			
			switch(name) {
				case 'name': return value && (value.length > 1)
					? ''
					: 'Please enter a valid name'
				case 'email': return value && /^[^@]+@[^@]+\.[^@]+$/.test(value)
					? ''
					: 'Please enter a valid email'
				case 'comment': return value && (value.length > 5)
					? ''
					: 'Please enter a valid message'

				default: return 'Error: we did not find this field'
			}
		}

		//check form is valid
		for (let key in values) {
			if (validateField(key, values[key])) isValid = false
		}

		this.setState({
			errors: { ...errors, [name]: validateField(name, value) },
			values,
			isValid
		})
	}

	async handleSubmit(e) {
		e.preventDefault()

		const res = await axios.post('/contact', this.state.values)
        
		await this.setState({ postStatus: res.data.status })
	}

	render() {
		const { state: { values, errors, postStatus, isValid }, handleSubmit, handleChange } = this

		return postStatus
			? (
				postStatus === 'success'
					? (
						<div className="form-message">
							<h4>Hey thanks!</h4>
							<p>I will get back to you soon!</p>
						</div>
					) : (
						<div className="form-message">
							<h4>Oops, look like there was an error</h4>
							<p>Try again or contact me using my contact information</p>
						</div>
					)
			) : (
				<form onSubmit={ handleSubmit }>
					<Field type="text" name="name" value={ values.name } error={ errors.name } handler={ handleChange } />
					<Field type="email" name="email" value={ values.email } error={ errors.email } handler={ handleChange } />
					<Field type="textarea" name="comment" value={ values.comment } error={ errors.comment } handler={ handleChange } />
					
					<button type="submit" disabled={ !isValid }>Send Message</button>
				</form>
			)
	}
}

export default ContactForm