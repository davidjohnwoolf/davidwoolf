import React, { Component } from 'react';

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			phone: '',
			comment: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit(e) {
		alert('Form Data ' + this.state);
		e.preventDefault();
	}

	render() {
		return (
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
					<textarea value={ this.state.value } name="comment" id="comment" placeholder="comment" onChange={ this.handleChange }  />
				</div>
				<button type="submit">Send Message</button>
			</form>
		);
	}
}

export default ContactForm