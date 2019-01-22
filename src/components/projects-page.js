import React from 'react'
import ContentBox from './content/content-box'

const ProjectsPage = ({ shouldSlideForward }) => {

	return (
		<div className={ `content ${ shouldSlideForward ? 'f-enter' : 'b-enter' }` } id="projects">
			<div className="project-sections sections">
				<ContentBox
					title="Portfolio Site"
					desc="A simple portfolio website to showcase my skills as a developer (you are looking at it now)."
					tech="JavaScript with React, Node/Express, HTML5, CSS3/Sass, Webpack and deployed with Docker"
					hasRef={ false }
				>
					<h4><a href="https://github.com/davidjohnwoolf/davidwoolf" target="_blank">Github</a></h4>
				</ContentBox>

				<ContentBox
					title="Profession Quest"
					desc="A collaborative capstone project for Portland Code School that pulls job postings from various different classifieds and combines them in one place."
					tech="JavaScript with Backbone, Node with Express, MongoDB, HTML5, CSS3, tested with Mocha/Chai and deployed with Heroku"
					hasRef={ false }
				>
					<h4><a href="https://professionquest.herokuapp.com/login" target="_blank">Website</a> <a href="https://github.com/professionQuest/professionQuest" target="_blank">Github</a></h4>
						<h4>Description</h4>
				</ContentBox>

				<ContentBox
					title="Patchatech"
					desc="A collaborative capstone project for DevPoint Labs that lets users view, upload, and comment on technical videos and tutorials."
					tech="Ruby with Rails, JavaScript with jQuery, HTML5, CSS3, tested with RSpec and deployed with Heroku"
					hasRef={ false }
				>
					<h4><a href="http://www.patchatech.com" target="_blank">Website</a> <a href="https://github.com/davidjohnwoolf/patchatech" target="_blank">Github</a></h4>
				</ContentBox>

				<ContentBox
					title="Inform Feed Controller"
					desc="A feed controller and organizer that pulls public feeds from the Facebook API and lets you view, organize and filter them anonymously."
					tech="JavaScript with Mithril, Node/Express, HTML5, CSS3, Gulp and deployed with Heroku"
					hasRef={ false }
				>
					<h4><a href="http://informfeedcontroller.herokuapp.com" target="_blank">Website</a> <a href="https://github.com/davidjohnwoolf/inform" target="_blank">Github</a></h4>
				</ContentBox>

				<ContentBox
					title="Unit Builder"
					desc="A custom trailer builder for the Dealerspike plaform that lets visitors customize their trailer and send it to the dealer."
					tech="JavaScript with jQuery, JSON Data Structures, HTML5, CSS3/LESS"
					hasRef={ false }
				>
					<h4><a href="https://www.nationwidetrailers.com/build-custom-pj-trailer-texas--unit-builder" target="_blank">Website</a></h4>
				</ContentBox>
			</div>
		</div>
	)
}

export default ProjectsPage