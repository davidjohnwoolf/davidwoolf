import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Experience extends React.Component {
	constructor(props) {
		super(props);

		document.querySelector('body').classList = 'experience';
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
			<div className="" id="experience">
				<div className="content experience">
					<nav className="content-previous">
						<Link to="/skills">&lsaquo;</Link>
					</nav>
					<div className="experience-sections sections">
						<section>
							<h3>Full Stack Developer</h3>
							<h4><a href="https://www.dealerspike.com/" target="_blank">Kaizen Renewables</a> <span className="dates">Feb 2018 - Nov 2018</span></h4>
							<h5>Duty</h5>
							<p>Building a custom CRM for door to door sales that lets users track leads through lists, filters, and a location based map interface, and lets managers and admins manage leads, users and sections of map assigned to users called areas that define the bounderies of their knocking territories</p>
							<h5>Technology</h5>
							<p>JavaScipt (ES6) with React/Redux, Node with Express, MongoDB with Mongoose, HTML5, CSS3 with Sass, Webpack, JSON Web Tokens, and the Google Maps API</p>
							<div className="hug-bottom">
								<h5>Reference</h5>
								<p>Sergio Sanchez - Owner</p>
								<a href="tel:8018670934">801.867.0934</a>
							</div>
						</section>
						<section>
							<h3>Website Support II</h3>
							<h4><a href="http://kaizenrenewables.com" target="_blank">Dealerspike</a> <span className="dates">Dec 2016 - Jun 2018</span></h4>
							<h5>Duty</h5>
							<p>Building custom multi-site features and handling updates for priority client websites as well as customizing our eCommerce platform with vanillla JavaScript</p>
							<h5>Technology</h5>
							<p>JavaScript (vanilla), jQuery, ASP, HTML5, CSS3 with LESS, and Bootstrap</p>
							<div className="hug-bottom">
								<h5>Reference</h5>
								<p>Andrew Dobranski - Assistant Manager</p>
								<a href="tel:9712804560">971.280.4560</a>
							</div>
						</section>
						<section>
							<h3>Website Support</h3>
							<h4><a href="http://kaizenrenewables.com" target="_blank">Dealerspike</a> <span className="dates">May 2016 - Dec 2016</span></h4>
							<h5>Duty</h5>
							<p>Working with clients to update and maintain their websites on our inventory management platform and building small paid custom features paid for by clients on a per site basis</p>
							<h5>Technology</h5>
							<p>JavaScript with jQuery, ASP, HTML5, CSS3 with LESS, and Bootstrap</p>
							<div className="hug-bottom">
								<h5>Reference</h5>
								<p>Andrew Dobranski - Assistant Manager</p>
								<a href="tel:9712804560">971.280.4560</a>
							</div>
						</section>
						<section>
							<h3>Front End Developer</h3>
							<h4><a href="https://www.greatergiving.com/" target="_blank">Greater Giving</a> <span className="dates">Mar 2015 - May 2016</span></h4>
							<h5>Duty</h5>
							<p>Building website templates for various charity fundraising events for use by organizations such as American Heart Association and Red Cross</p>
							<h5>Technology</h5>
							<p>JavaScript, HTML5, CSS3, and Bootstrap</p>
							<div className="hug-bottom">
								<h5>Reference</h5>
								<p>Do - Manager</p>
								<a href="tel:9712804560">971.280.4560</a>
							</div>
						</section>
						<section>
							<h3>Website Sales and Marketing</h3>
							<h4><a href="https://www.lemonheaddesign.com/" target="_blank">Lemonhead Design</a> <span className="dates">Jan 2014 - August 2014</span></h4>
							<h5>Duty</h5>
							<p>Generating leads online and coverting them into clients for a small web development company</p>
							<div className="hug-bottom">
								<h5>Technology</h5>
								<p>Wordpress, Google Analytics, HTML, CSS</p>
							</div>
						</section>
						<section>
							<h3>Web Developer</h3>
							<h4><a href="https://github.com/davidjohnwoolf/project_bold_rails" target="_blank">Freelance</a> <span className="dates">2008 - 2014</span></h4>
							<h5>Duty</h5>
							<p>Learning web development and occasionally building websites for friends, family and paying clients</p>
							<div className="hug-bottom">
								<h5>Technology</h5>
								<p>JavaScript, HTML, CSS, PHP, and jQuery</p>
							</div>
						</section>
					</div>
					<nav className="content-next">
						<Link to="/projects">&rsaquo;</Link>
					</nav>
				</div>
			</div>
		);
	}
}

export default withRouter(Experience);