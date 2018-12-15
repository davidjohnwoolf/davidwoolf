import React from 'react';

const Projects = ({ slideForward }) => {

	return (
		<div className={ `content ${ slideForward ? 'f-enter' : 'b-enter' }` } id="projects">
			<div className="project-sections sections">
				<section>
					<h3><a href="/" target="_blank">Portfolio Site</a></h3>
					<a href="https://github.com/davidjohnwoolf/davidjohnwoolf" target="_blank">Github Repo</a>
					<h5>Description</h5>
					<p>A simple portfolio website to showcase my skills as a developer (you are looking at it now).</p>
					
					<h5>Technology</h5>
					<p>Node with Express, JavaScript with React, HTML5, CSS3/Sass and Webpack</p>
				</section>
				<section>
					<h3><a href="http://informfeedcontroller.herokuapp.com" target="_blank">Inform</a></h3>
					<a href="https://github.com/davidjohnwoolf/inform" target="_blank">Github Repo</a>
					<h5>Description</h5>
					<p>A feed controller and organizer that pulls public feeds from the Facebook API and lets you view, organize and filter them anonymously.</p>
					
					<h5>Technology</h5>
					<p>Node with Express, JavaScript with Mithril, HTML5, CSS3, and Gulp</p>
				</section>
				<section>
					<h3><a href="http://www.patchatech.com" target="_blank">Patchatech</a></h3>
					<a href="https://github.com/davidjohnwoolf/inform" target="_blank">Github Repo</a>
					<h5>Description</h5>
					<p>A collaborative capstone project for DevPoint Labs that lets users view, upload, and comment on technical videos and tutorials.</p>
					
					<h5>Technology</h5>
					<p>Ruby with Rails, JavaScript with jQuery, HTML5, CSS3/Sass, and tested with RSpec</p>
				</section>
				<section>
					<h3><a href="https://professionquest.herokuapp.com/login" target="_blank">Profession Quest</a></h3>
					<a href="https://github.com/professionQuest/professionQuest" target="_blank">Github Repo</a>
					<h5>Description</h5>
					<p>A collaborative capstone project for Portland Code School that pulls job postings from various different classifieds and combines them in one place.</p>
					
					<h5>Technology</h5>
					<p>Node with Express, JavaScript with backbone, HTML5, CSS3, and tested with Mocha/Chai</p>
				</section>
				<section>
					<h3><a href="https://ahautah.ejoinme.org/MyEvents/20172018UtahHeartBall/tabid/872317/Default.aspx" target="_blank">Heart Ball Template</a></h3>
					<h5>Description</h5>
					<p>A template I built for the American Heart Associations Heart Ball Fundraiser (site linked above is an implementation of the template).</p>
					
					<h5>Technology</h5>
					<p>HTML5, CSS3, JavaScript</p>
				</section>
				<section>
					<h3><a href="https://www.nationwidetrailers.com/build-custom-pj-trailer-texas--unit-builder" target="_blank">Unit Builder</a></h3>
					<h5>Description</h5>
					<p>A custom trailer builder for the Dealerspike plaform that lets visitors customize their trailer and send it to the dealer.</p>
					
					<h5>Technology</h5>
					<p>HTML5, CSS3/LESS, JavaScript with jQuery</p>
				</section>
			</div>
		</div>
	);
}

export default Projects;