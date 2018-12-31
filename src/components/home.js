import React from 'react';

const Home = ({ shouldSlideForward }) => {

	return (
		<div className={ `content ${ shouldSlideForward ? 'f-enter' : 'b-enter' }` } id="home">
			<div className="home-sections sections">
				<section className="home-picture">
					<div aria-hidden="true" hidden>Image of David Woolf</div>
				</section>
				<section className="home-summary">
					<h3>Introduction</h3>
					<div className="section-content">
						<p>
							I am a web developer in Salt Lake City working in JavaScript, HTML, CSS, Node and MongoDB.  I have also worked with Ruby and have an interest in Python.
						</p>
						<p>
							My current focus is in integrating more functional patterns into my applications, and getting a degree in computer science.
						</p>
						<p>
							I also enjoy reading, playing chess, backpacking/outdoors, and skateboarding.
						</p>
					</div>
				</section>
				<section className="home-training">
					<h3>Training</h3>
					<div className="section-content">
						<section>
							<h4><a href="//www.portlandcodeschool.com/" target="_blank">Fullstack JS Code School - Portland Code School</a></h4>
							<p>A part time 12 week course focusing on Node, JavaScript, Express, jQuery, Backbone, and MongoDB from Portland Code School.</p>
						</section>
						<section>
							<h4><a href="//www.devpointlabs.com/" target="_blank">Ruby Code School - DevPoint Labs</a></h4>
							<p>A full time 12 week code school focusing on Ruby, Rails, Sinatra, and various front end technologies from Devpoint Labs.</p>
						</section>
						{ /* <section>
							<h4><a href="" target="_blank">Web Developer Certificate - Windows</a></h4>
							<p>Certified in JavaScript, HTML5 and CSS3</p>
						</section> */ }
						<section>
							<h4><a href="//udemy.com" target="_blank">Courses - Udemy</a></h4>
							<p>Completed courses in React, Redux, AngularJS, Node, and IT security</p>
						</section>
						<section>
							<h4><a href="//lynda.com" target="_blank">Courses - Lynda</a></h4>
							<p>Completed courses in Data Structures and Object Oriented Design among others throughout the years</p>
						</section>
					</div>
				</section>
				<section className="home-contact">
					<h3>About</h3>
					<div className="section-content">
						<p>
							I started exploring web technologies in 2008 for personal reasons and it soon turned into a hobbie and passion, and later a career.
						</p>
						<p>
							In the first years I spent my time learning and building websites for friends and clients on the side of my day job. As I started coding more I decided to turn this into a full time career and attend a code school for Ruby Development.

							Not long after this I found myself building website templates for a fundraising web platform. I also took this time to attend a part time code school in the evenings for full stack JavaScript.
						</p>
						<p>
							From there I moved to a job updating and building features for websites on a dealer management platform while teaching myself React on the side.
						</p>
						<p>
							Most recently I worked as a contracted developer building a custom CRM for door to door sales with React, Node, Express, and MongoDB.
						</p>
						<p>
							I am currently looking for a career and company I can grow with over time using modern technologies.
						</p>
					</div>
				</section>
			</div>
			
		</div>
	);
	
}

export default Home;
