import React from 'react'

const ExperiencePage = ({ shouldSlideForward }) => {

	return (
		<div className={ `content ${ shouldSlideForward ? 'f-enter' : 'b-enter' }` } id="experience">
			<div className="experience-sections sections">
				<section>
					<h3>Full Stack Web Developer</h3>
					<div className="section-content">
						<h4><a href="//kaizenrenewables.com/" target="_blank">Kaizen Solar</a> <span className="dates">Feb 2018 - Nov 2018</span></h4>
						<h4>Duty</h4>
						<p>Contracted to build a CRM for door to door sales. Started part time on the side and moved to full time in June of 2018.</p>
						<h4>Technology</h4>
						<p>JavaScipt (ES6) with React/Redux, Node/Express, MongoDB, HTML5, CSS3/Sass, and Webpack</p>
						<div>
							<h4>Reference</h4>
							<p>
								Sergio Sanchez - Owner
								<br />
								<a href="tel:8018670934">801.867.0934</a>
							</p>
						</div>
					</div>
				</section>
				<section>
					<h3>Website Support II</h3>
					<div className="section-content">
						<h4><a href="https://www.dealerspike.com" target="_blank">Dealerspike</a> <span className="dates">Dec 2016 - Jun 2018</span></h4>
						<h4>Duty</h4>
						<p>Building custom website features and handling updates for priority client websites as well as customizing our eCommerce platform with vanilla JS.</p>
						<h4>Technology</h4>
						<p>JavaScript, jQuery, ASP, HTML5, CSS3/LESS, and Bootstrap</p>
						<div>
							<h4>Reference</h4>
							<p>
								Andrew Dobranski - Assistant Manager
								<br />
								<a href="tel:9712804560">971.280.4560</a>
							</p>
						</div>
					</div>
				</section>
				<section>
					<h3>Website Support</h3>
					<div className="section-content">
						<h4><a href="https://www.dealerspike.com" target="_blank">Dealerspike</a> <span className="dates">May 2016 - Dec 2016</span></h4>
						<h4>Duty</h4>
						<p>Working with clients to customize, update and maintain their websites on our inventory management platform.</p>
						<h4>Technology</h4>
						<p>JavaScript with jQuery, ASP, HTML5, CSS3/LESS, and Bootstrap</p>
						<div>
							<h4>Reference</h4>
							<p>
								Andrew Dobranski - Assistant Manager
								<br />
								<a href="tel:9712804560">971.280.4560</a>
							</p>
						</div>
					</div>
				</section>
				<section>
					<h3>Front End Web Developer</h3>
					<div className="section-content">
						<h4><a href="https://www.greatergiving.com/" target="_blank">Greater Giving</a> <span className="dates">Mar 2015 - May 2016</span></h4>
						<h4>Duty</h4>
						<p>Building website templates for various charity fundraising events for use by organizations such as American Heart Association and Red Cross.</p>
						<h4>Technology</h4>
						<p>JavaScript, HTML5, CSS3, and Bootstrap</p>
						<div>
							<h4>Reference</h4>
							<p>
								Do - Manager
								<br />
								<a href="tel:9712804560">971.280.4560</a>
							</p>
						</div>
					</div>
				</section>
				<section>
					<h3>Front End Web Developer</h3>
					<div className="section-content">
						<h4><a href="https://github.com/davidjohnwoolf/project_bold_rails" target="_blank">Freelance</a> <span className="dates">2008 - 2014</span></h4>
						<h4>Duty</h4>
						<p>Learning web development and occasionally building websites for friends, family and clients.</p>
						<div>
							<h4>Technology</h4>
							<p>JavaScript, HTML, CSS, PHP, and jQuery</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}

export default ExperiencePage