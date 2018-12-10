import React from 'react';
import { Link } from 'react-router-dom';

class Experience extends React.Component {
	constructor(props) {
		super(props);

		document.querySelector('body').classList = 'experience';
	}

	render() {
		return (
			<div className="content experience">
				<nav className="content-previous">
					<Link to="/skills">&#9650;</Link>
				</nav>
				<section className="content-box experience-job">
					<h3>Job 1</h3>
				</section>
				<section className="content-box experience-job">
					<h3>Job 2</h3>
				</section>
				<section className="content-box experience-job">
					<h3>Job 3</h3>
				</section>
				<section className="content-box experience-job">
					<h3>Job 4</h3>
				</section>
				<section className="content-box experience-job">
					<h3>Job 5</h3>
				</section>
				<nav className="content-next">
					<Link to="/projects">&#9660;</Link>
				</nav>
			</div>
		);
	}
}

export default Experience;