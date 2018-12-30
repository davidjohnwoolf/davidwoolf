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
							My current focus is in integrating more functional patterns into my applications.
						</p>
					</div>
				</section>
				<section className="home-training">
					<h3>Training</h3>
					<div className="section-content">
						<section>
							<h4><a href="http://www.portlandcodeschool.com/">Node/JS Code School - Portland Code School</a></h4>
							<p>A part time 12 week course focusing on Node, JavaScript, Express, jQuery, Backbone, and MongoDB from Portland Code School.</p>
						</section>
						<section>
							<h4><a href="http://www.devpointlabs.com/">Ruby Code School - DevPoint Labs</a></h4>
							<p>A full time 12 week code school focusing on Ruby, Rails, Sinatra, and various front end technologies from Devpoint Labs.</p>
						</section>
						<section>
							<h4><a href="">Web Developer Certificate - Windows</a></h4>
							<p>Certified in JavaScript, HTML5 and CSS3</p>
						</section>
						<section>
							<h4><a href="">Course Certificates - Udemy</a></h4>
							<p>Completed courses in React, Redux, Angular, Node, and JavaScript</p>
						</section>
						<section>
							<h4><a href="">Course Certificates - Lynda</a></h4>
							<p>Completed courses in Data Structures, Object Oriented Design, and IT Security</p>
						</section>
					</div>
				</section>
				<section className="home-contact">
					<h3>About</h3>
					<div className="section-content">
						<p>
							I started exploring web technologies in 2008 and it soon turned into a hobbie and later a career.
						</p>
						<p>
							In the first years I spent my time learning and building websites for friends and clients on the side of my day job. As I started coding more I decided to turn this into a full time career and attend a code school for Ruby Development, not long after which I found myself building website templates full time.  I also took this time to attend a part time code school in the evenings for full stack JavaScript. From there I moved to a job updating and building features for websites on a dealer management platform while teaching myself React on the side. Most recently I worked as a contracted developer building a custom CRM for door to door sales with React, Node, Express, and MongoDB.  I am now looking for a job and company I can grow with over time using modern technologies.
						</p>
						<p>
							I also enjoy hiking, backpacking, reading, chess, skateboarding, and anything related to fantasy or science fiction.
						</p>
					</div>
				</section>
			</div>
			
		</div>
	);
	
}

export default Home;
