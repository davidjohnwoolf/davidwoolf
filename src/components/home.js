import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Home extends React.Component {

	constructor(props) {
		super(props);
		console.log('mount')

		document.querySelector('body').classList = 'home';
	}

	componentDidUpdate() {
		if (this.props.startData.transition) {
			const dest = this.props.startData.dest;
			setTimeout(() => {
				this.props.resetHandler();

				console.log('dest in update', dest)
	            this.props.history.push(dest);
	        }, 500)
		}
	}

	render() {
		return (
			<div className={ `${ this.props.startData.transition ? 'f-exit' : '' }` } id="home">
				<div className="content home">
					<div className="home-sections sections">
						<section className="home-picture">
							<img src="http://placehold.it/500x500" alt="David Woolf" />
						</section>
						<section className="home-summary">
							<h3>Summary</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
						</section>
						<section className="home-training">
							<h3>Training</h3>
							<section>
								<h4>Lorem Ipsum</h4>
								<h6>October 2029</h6>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
							</section>
							<section>
								<h4>Dolar Sit</h4>
								<h6>November 2019</h6>
								<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							</section>
							<section>
								<h4>Occaecat Cupidatat</h4>
								<h6>March 1989</h6>
								<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
							</section>
						</section>
						<section className="home-contact">
							<h3>Contact</h3>
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
						</section>
					</div>
					<nav className="content-next">
						<Link to="/skills">&#9660;</Link>
					</nav>
				</div>
			</div>
		);
	}
	
}

export default withRouter(Home);