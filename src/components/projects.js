import React from 'react';
import { Link } from 'react-router-dom';

class Projects extends React.Component {
	constructor(props) {
		super(props);

		document.querySelector('body').classList = 'projects';
	}

	render() {
		return (
			<div className="content projects">
				<nav className="content-previous">
					<Link to="/experience">&#9650;</Link>
				</nav>
				<section className="content-box project-project">
					<h3>Project 1</h3>
				</section>
				<section className="content-box project-project">
					<h3>Project 2</h3>
				</section>
				<section className="content-box project-project">
					<h3>Project 3</h3>
				</section>
				<section className="content-box project-project">
					<h3>Project 4</h3>
				</section>
				<section className="content-box project-project">
					<h3>Project 5</h3>
				</section>
				<section className="content-box project-project">
					<h3>Project 6</h3>
				</section>
			</div>
		);
	}
}

export default Projects;