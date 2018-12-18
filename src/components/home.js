import React from 'react';

const Home = ({ slideForward }) => {

	return (
		<div className={ `content ${ slideForward ? 'f-enter' : 'b-enter' }` } id="home">
			<div className="home-sections sections">
				<section className="home-picture">
					<div aria-hidden="true" hidden>Image of David Woolf</div>
				</section>
				<section className="home-summary">
					<h3>Introduction</h3>
					<div class="section-content">
						<p>
							I am a web developer who loves coding.  My prefered stack is React, Node, Express, and MongoDB, but I also enjoy Ruby with either Rails or Sinatra, and have an interest in learing more Angular and Python.  My personal focus right now is in mastering the functional paradigm, and I plan to learn Haskel this year to further my grasp.
						</p>
					</div>
				</section>
				<section className="home-training">
					<h3>Education/Achievements</h3>
					<div class="section-content">
						<section>
							<h4 className="section-top-title">JavaScript Code School - Portland Code School</h4>
							<p>A part time 12 week course focusing on JavaScript using jQuery, Backbone, Node, Express, and MongoDB from Portland Code School.</p>
						</section>
						<section>
							<h4>Ruby Code School - DevPoint Labs</h4>
							<p>A full time 12 week code school focusing on Ruby, Rails, Sinatra, and various front end technologies from .</p>
						</section>
						<section>
							<h4>Web Developer Certificate - Windows</h4>
							<p>Programming in HTML5 with JavaScript and CSS3</p>
						</section>
						<section>
							<h4>JavaScript Certificate - W3 Schools</h4>
							<p>Including Advanced JavaScript, other one, etc</p>
						</section>
					</div>
				</section>
				<section className="home-contact">
					<h3>About</h3>
					<div class="section-content">
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
