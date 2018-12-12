import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Contact extends React.Component {
	constructor(props) {
		super(props);

		document.querySelector('body').classList = 'contact';
	}

	componentDidUpdate() {
		console.log(this.props.startData);
		if (this.props.startData.transition) {
			const path = this.props.startData.dest;

			this.props.resetHandler();
			this.props.history.push(path);
		}
	}

	render() {
		return (
			<div className="content contact">
				<nav className="content-previous">
					<Link to="/projects">&#9650;</Link>
				</nav>
				<div className="contact-sections sections">
					<section>
						<h3>Form</h3>
					</section>
					<section>
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
					<section>
						<img src="http://placehold.it/800x200" alt="goodbye" />
					</section>
				</div>
			</div>
		);
	}
}

export default withRouter(Contact);