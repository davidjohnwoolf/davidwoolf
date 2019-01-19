import React from 'react';

const ProjectsPage = ({ shouldSlideForward }) => {

	return (
		<div className={ `content ${ shouldSlideForward ? 'f-enter' : 'b-enter' }` } id="projects">
			<div className="project-sections sections">
				<section>
					<h3>Portfolio Site</h3>
					<div className="section-content">
						<h4><a href="https://github.com/davidjohnwoolf/davidwoolf" target="_blank">Github</a></h4>
						<h4>Description</h4>
						<p>A simple portfolio website to showcase my skills as a developer (you are looking at it now).</p>
						
						<h4>Technology</h4>
						<p>JavaScript with React, Node/Express, HTML5, CSS3/Sass, Webpack and deployed with Docker</p>
					</div>
				</section>
				<section>
					<h3>Inform</h3>
					<div className="section-content">
						<h4><a href="http://informfeedcontroller.herokuapp.com" target="_blank">Website</a> <a href="https://github.com/davidjohnwoolf/inform" target="_blank">Github</a></h4>
						<h4>Description</h4>
						<p>A feed controller and organizer that pulls public feeds from the Facebook API and lets you view, organize and filter them anonymously.</p>
						
						<h4>Technology</h4>
						<p>JavaScript with Mithril, Node/Express, HTML5, CSS3, Gulp and deployed with Heroku</p>
					</div>
				</section>
				<section>
					<h3>Patchatech</h3>
					<div className="section-content">
						<h4><a href="http://www.patchatech.com" target="_blank">Website</a> <a href="https://github.com/davidjohnwoolf/inform" target="_blank">Github</a></h4>
						<h4>Description</h4>
						<p>A collaborative capstone project for DevPoint Labs that lets users view, upload, and comment on technical videos and tutorials.</p>
						
						<h4>Technology</h4>
						<p>Ruby with Rails, JavaScript with jQuery, HTML5, CSS3/Sass, tested with RSpec and deployed with Heroku</p>
					</div>
				</section>
				<section>
					<h3>Profession Quest</h3>
					<div className="section-content">
						<h4><a href="https://professionquest.herokuapp.com/login" target="_blank">Website</a> <a href="https://github.com/professionQuest/professionQuest" target="_blank">Github</a></h4>
						<h4>Description</h4>
						<p>A collaborative capstone project for Portland Code School that pulls job postings from various different classifieds and combines them in one place.</p>
						
						<h4>Technology</h4>
						<p>JavaScript with backbone, Node with Express, HTML5, CSS3, tested with Mocha/Chai and deployed with Heroku</p>
					</div>
				</section>
				{ /*<section>
					<h3>Something Else</h3>
					<div className="section-content">
						<h4><a href="https://ahautah.ejoinme.org/MyEvents/20172018UtahHeartBall/tabid/872317/Default.aspx" target="_blank">Website</a></h4>
						<h5>Description</h5>
						<p>A template I built for the American Heart Associations Heart Ball Fundraiser (site linked above is an implementation of the template).</p>
						
						<h5>Technology</h5>
						<p>HTML5, CSS3, JavaScript</p>
					</div>
				</section> */ }
				<section>
					<h3>Unit Builder</h3>
					<div className="section-content">
						<h4><a href="https://www.nationwidetrailers.com/build-custom-pj-trailer-texas--unit-builder" target="_blank">Website</a></h4>
						<h4>Description</h4>
						<p>A custom trailer builder for the Dealerspike plaform that lets visitors customize their trailer and send it to the dealer.</p>
						
						<h4>Technology</h4>
						<p>HTML5, CSS3/LESS, JavaScript with jQuery</p>
					</div>
				</section>
			</div>
		</div>
	);
}

export default ProjectsPage;