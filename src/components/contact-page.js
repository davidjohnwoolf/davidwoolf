import React from 'react'

import ContactForm from './forms/contact-form'

const ContactPage = ({ shouldSlideForward }) => {

	return (
		<div className={ `content ${ shouldSlideForward ? 'f-enter' : 'b-enter' }` } id="contact">
			<div className="contact-sections sections">
				<section className="contact-form">
					<h3>Send Message</h3>
					<div className="section-content form-section">
						<ContactForm />
					</div>
				</section>
				<section className="contact-info">
					<h3>Contact Information</h3>
					<div className="section-content">
						<h4>Email</h4>
						<p><a href="mailto:davidjohnwoolf@gmail.com">davidjohnwoolf@gmail.com</a></p>
						<h4>Phone</h4>
						<p><a href="tel:8016339105">801.633.9105</a></p>
						<h4>Location</h4>
						<p><a href="https://goo.gl/maps/LW89sKg8YSK2" target="_blank">Salt Lake City, UT</a></p>
						<h4>Github</h4>
						<p><a href="https://github.com/davidjohnwoolf" target="_blank">github.com/davidjohnwoolf</a></p>
						<h4>Linked In</h4>
						<p><a href="https://linkedin.com/in/davidjohnwoolf" target="_blank">linkedin.com/in/davidjohnwoolf</a></p>
					</div>
				</section>
			</div>
		</div>
	);
}

export default ContactPage;