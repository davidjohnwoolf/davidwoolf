import React, { Component } from 'react'
import axios from 'axios'

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			form: {
				name: '',
				email: '',
				phone: '',
				comment: ''
			},
			success: false
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(e) {
		this.setState({ form: { ...this.state.form, [e.target.name]: e.target.value } })
	}

	async handleSubmit(e) {
		e.preventDefault()

		// const { data: res } = await axios.post('/contact', this.state.form)
        
		// await res.status && (res.status === 'failure' || res.status === 'error')
		// 	? alert('failed')
		// 	: this.setState({ success: true })

		this.setState({ success: true })
	}

	render() {
		return this.state.success
			? <h4 className="form-confirmation">Who are you are why did you use my form? Just kidding I will get back to you soon</h4>
			: (
				<form className="contact-form" onSubmit={ this.handleSubmit }>
					<div>
						<input type="text" name="name" id="name" value={ this.state.value } placeholder="name" onChange={ this.handleChange } />
					</div>
					<div>
						<input type="email" name="email" id="email" value={ this.state.email } placeholder="email" onChange={ this.handleChange } />
					</div>
					<div>
						<input type="text" name="phone" id="phone" value={ this.state.phone } placeholder="phone number" onChange={ this.handleChange } />
					</div>
					<div>
						<textarea value={ this.state.value } name="comment" id="comment" placeholder="message" onChange={ this.handleChange }  />
					</div>
					<button type="submit">Send Message</button>
				</form>
			)
	}
}

export default ContactForm