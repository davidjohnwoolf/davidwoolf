import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {

	constructor(props) {
		super(props);

		document.querySelector('body').classList = 'about';
	}

	render() {
		return (
			<div className="content about">
				<section className="content-box about-picture">
					<img src="http://placehold.it/500x500" alt="David Woolf" />
				</section>
				<section className="content-box about-summary">
					<h3>Summary</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</section>
				<section className="content-box about-training">
					<h3>Training</h3>
					<section className="content-box-sub">
						<h4>Lorem Ipsum</h4>
						<h6>October 2029</h6>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
					</section>
					<section className="content-box-sub">
						<h4>Dolar Sit</h4>
						<h6>November 2019</h6>
						<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</section>
					<section className="content-box-sub">
						<h4>Occaecat Cupidatat</h4>
						<h6>March 1989</h6>
						<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
					</section>
				</section>
				<section className="content-box about-contact">
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
				<nav className="content-next">
					<Link to="/skills">&#9660;</Link>
				</nav>
			</div>
		);
	}
	
}

export default About;