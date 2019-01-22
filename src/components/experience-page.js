import React from 'react'
import JobBox from './content/job-box'

const ExperiencePage = ({ shouldSlideForward }) => {

	return (
		<div className={ `content ${ shouldSlideForward ? 'f-enter' : 'b-enter' }` } id="experience">
			<div className="experience-sections sections">
				<JobBox
					title="Full Stack Web Developer"
					desc="Contracted to build a CRM for door to door sales. Started part time on the side and moved to full time in June of 2018."
					tech="JavaScipt (ES6) with React/Redux, Node/Express, MongoDB, HTML5, CSS3/Sass, and Webpack"
					hasRef={ true }
					refTitle="Sergio Sanchez - Owner"
					refPhone="8018670934"
					company="Kaizen Solar"
					website="//kaizenrenewables.com/"
					dates="Feb 2018 - Nov 2018"
				/>

				<JobBox
					title="Website Support II"
					desc="Building custom website features and handling updates for priority client websites as well as customizing our eCommerce platform with vanilla JS."
					tech="JavaScript, jQuery, ASP, HTML5, CSS3/LESS, and Bootstrap"
					hasRef={ true }
					refTitle="Andrew Dobranski - Assistant Manager"
					refPhone="9712804560"
					company="Dealerspike"
					website="https://www.dealerspike.com"
					dates="Dec 2016 - Jun 2018"
				/>

				<JobBox
					title="Website Support"
					desc="Working with clients to customize, update and maintain their websites on our inventory management platform."
					tech="JavaScript, jQuery, ASP, HTML5, CSS3/LESS, and Bootstrap"
					hasRef={ true }
					refTitle="Andrew Dobranski - Assistant Manager"
					refPhone="9712804560"
					company="Dealerspike"
					website="https://www.dealerspike.com"
					dates="May 2016 - Dec 2016"
				/>

				<JobBox
					title="Front End Web Developer"
					desc="Building website templates for various charity fundraising events for use by organizations such as American Heart Association and Red Cross."
					tech="HTML5, CSS3, Bootstrap, JavaScript"
					hasRef={ true }
					refTitle="Do Kim - Manager"
					refPhone="9712804560"
					company="Greater Giving"
					website="https://www.greatergiving.com/"
					dates="Mar 2015 - May 2016"
				/>

				<JobBox
					title="Web Designer"
					desc="Learning web development and occasionally building websites for friends, family and clients."
					tech="JavaScript, HTML, CSS, jQuery, GIMP, Inkscape and limited PHP"
					hasRef={ false }
					company="Freelance"
					website="https://github.com/davidjohnwoolf/project_bold_rails"
					dates="2008 - 2014"
				/>
			</div>
		</div>
	)
}

export default ExperiencePage