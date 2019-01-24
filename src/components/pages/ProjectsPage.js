import React from 'react'
import ProjectBox from '../content/ProjectBox'

const ProjectsPage = ({ shouldSlideForward }) => {

	return (
		<div className={ `content ${ shouldSlideForward ? 'f-enter' : 'b-enter' }` } id="projects">
			<div className="project-sections sections">
				
				<ProjectBox
					title="Profession Quest"
					desc="A collaborative capstone project for Portland Code School that pulls job postings from various different classifieds and combines them in one place."
					tech="JavaScript with Backbone, Node with Express, MongoDB, HTML5, CSS3, tested with Mocha/Chai and deployed with Heroku"
					website="https://professionquest.herokuapp.com/login"
					github="https://github.com/professionQuest/professionQuest"
				/>

				<ProjectBox
					title="Patchatech"
					desc="A collaborative capstone project for DevPoint Labs that lets users view, upload, and comment on technical videos and tutorials."
					tech="Ruby with Rails, JavaScript with jQuery, HTML5, CSS3, tested with RSpec and deployed with Heroku"
					website="http://www.patchatech.com"
					github="https://github.com/davidjohnwoolf/patchatech"
				/>

				<ProjectBox
					title="Inform Feed Controller"
					desc="A feed controller and organizer that pulls public feeds from the Facebook API and lets you view, organize and filter them anonymously."
					tech="JavaScript with Mithril, Node/Express, HTML5, CSS3, Gulp and deployed with Heroku"
					website="http://informfeedcontroller.herokuapp.com"
					github="https://github.com/davidjohnwoolf/inform"
				/>

				<ProjectBox
					title="Unit Builder"
					desc="A custom trailer builder for the Dealerspike plaform that lets visitors customize their trailer and send it to the dealer."
					tech="JavaScript with jQuery, JSON Data Structures, HTML5, CSS3/LESS"
					website="https://www.nationwidetrailers.com/build-custom-pj-trailer-texas--unit-builder"
				/>

				<ProjectBox
					title="Portfolio Site"
					desc="A simple portfolio website to showcase my skills as a developer (you are looking at it now)."
					tech="JavaScript with React, Node/Express, HTML5, CSS3/Sass, Webpack and deployed with Docker"
					github="https://github.com/davidjohnwoolf/davidwoolf"
					
				/>
			</div>
		</div>
	)
}

export default ProjectsPage