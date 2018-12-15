import React from 'react';

const Contact = ({ slideForward }) => {

	return (
		<div className={ `content ${ slideForward ? 'f-enter' : 'b-enter' }` } id="contact">
			<div className="contact-sections sections">
				<section className="contact-form">
					<h3>Form</h3>
				</section>
				<section className="contact-info">
					<h3>Contact</h3>
					<h4>Email</h4>
					<a href="mailto:davidjohnwoolf@gmail.com">davidjohnwoolf@gmail.com</a>
					<h4>Phone</h4>
					<a href="tel:8016339105">801.633.9105</a>
					<h4>Location</h4>
					<a href="https://goo.gl/maps/LW89sKg8YSK2" target="_blank">Salt Lake City, UT</a>
					<h4>Github</h4>
					<a href="https://github.com/davidjohnwoolf" target="_blank">github.com/davidjohnwoolf</a>
					<h4>Linked In</h4>
					<a href="https://linkedin.com/in/davidjohnwoolf" target="_blank">linkedin.com/in/davidjohnwoolf</a>
				</section>
				<section className="contact-graphic">
					<img src="http://placehold.it/800x200" alt="goodbye" />
				</section>
			</div>
		</div>
	);
}

export default Contact;