import React from 'react';

const Experience = ({ slideForward }) => {

	return (
		<div className={ `content ${ slideForward ? 'f-enter' : 'b-enter' }` } id="experience">
			<div className="experience-sections sections">
				<section>
					<h3>Full Stack Web Developer</h3>
					<div className="section-content">
						<h4><a href="https://www.dealerspike.com/" target="_blank">Kaizen Renewables</a> <span className="dates">Feb 2018 - Nov 2018</span></h4>
						<h4>Duty</h4>
						<p>Building a CRM for door to door sales that lets users track leads through lists, filters, and a location based map interface using tiered user privileges</p>
						<h4>Technology</h4>
						<p>JavaScipt (ES6) with React/Redux, Node with Express, MongoDB with Mongoose, HTML5, CSS3 with Sass, Webpack, JSON Web Tokens, and the Google Maps API</p>
						<div>
							<h4>Reference</h4>
							<p>Sergio Sanchez - Owner</p>
							<p><a href="tel:8018670934">801.867.0934</a></p>
						</div>
					</div>
				</section>
				<section>
					<h3>Website Support II</h3>
					<div className="section-content">
						<h4><a href="http://kaizenrenewables.com" target="_blank">Dealerspike</a> <span className="dates">Dec 2016 - Jun 2018</span></h4>
						<h4>Duty</h4>
						<p>Building custom website features and handling updates for priority client websites as well as customizing our eCommerce platform</p>
						<h4>Technology</h4>
						<p>JavaScript (vanilla), jQuery, ASP, HTML5, CSS3 with LESS, and Bootstrap</p>
						<div>
							<h4>Reference</h4>
							<p>Andrew Dobranski - Assistant Manager</p>
							<p><a href="tel:9712804560">971.280.4560</a></p>
						</div>
					</div>
				</section>
				<section>
					<h3>Website Support</h3>
					<div className="section-content">
						<h4><a href="http://kaizenrenewables.com" target="_blank">Dealerspike</a> <span className="dates">May 2016 - Dec 2016</span></h4>
						<h4>Duty</h4>
						<p>Working with clients to customize, update and maintain their websites on our inventory management platform</p>
						<h4>Technology</h4>
						<p>JavaScript with jQuery, ASP, HTML5, CSS3 with LESS, and Bootstrap</p>
						<div>
							<h4>Reference</h4>
							<p>Andrew Dobranski - Assistant Manager</p>
							<p><a href="tel:9712804560">971.280.4560</a></p>
						</div>
					</div>
				</section>
				<section>
					<h3>Front End Web Developer</h3>
					<div className="section-content">
						<h4><a href="https://www.greatergiving.com/" target="_blank">Greater Giving</a> <span className="dates">Mar 2015 - May 2016</span></h4>
						<h4>Duty</h4>
						<p>Building website templates for various charity fundraising events for use by organizations such as American Heart Association and Red Cross</p>
						<h4>Technology</h4>
						<p>JavaScript, HTML5, CSS3, and Bootstrap</p>
						<div>
							<h4>Reference</h4>
							<p>Do - Manager</p>
							<p><a href="tel:9712804560">971.280.4560</a></p>
						</div>
					</div>
				</section>
				{ /* <section>
					<h3>Website Sales and Marketing</h3>
					<div className="section-content">
						<h4><a href="https://www.lemonheaddesign.com/" target="_blank">Lemonhead Design</a> <span className="dates">Jan 2014 - August 2014</span></h4>
						<h4>Duty</h4>
						<p>Generating leads online and coverting them into clients for a small web development company</p>
						<div className="hug-bottom">
							<h4>Technology</h4>
							<p>Google Analytics, knowledge of Wordpress, PHP, HTML, and CSS</p>
						</div>
					</div>
				</section> */ }
				<section>
					<h3>Front End Web Developer</h3>
					<div className="section-content">
						<h4><a href="https://github.com/davidjohnwoolf/project_bold_rails" target="_blank">Freelance</a> <span className="dates">2008 - 2014</span></h4>
						<h4>Duty</h4>
						<p>Learning web development and occasionally building websites for friends, family and paying clients</p>
						<div>
							<h4>Technology</h4>
							<p>JavaScript, HTML, CSS, PHP, and jQuery</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default Experience;