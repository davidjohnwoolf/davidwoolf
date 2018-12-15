import React from 'react';

const Skills = ({ slideForward }) => {

	return (
		<div className={ `content ${ slideForward ? 'f-enter' : 'b-enter' }` } id="skills">
			<div className="skills-sections sections">
				<section className="skills-lang">
					<h3>Languages</h3>
					<section className="graph-bar">
						<div className="bar"><span className="bar-js">JavaScript</span></div>
						<div className="bar"><span className="bar-html">HTML</span></div>
						<div className="bar"><span className="bar-css">CSS</span></div>
						<div className="bar"><span className="bar-node">Node</span></div>
						<div className="bar"><span className="bar-mongo">MongoDB</span></div>
						<div className="bar"><span className="bar-ruby">Ruby</span></div>
						<div className="bar"><span className="bar-asp">ASP</span></div>
						<div className="bar"><span className="bar-postgres">PostgreSQL</span></div>
						<div className="bar"><span className="bar-python">Python</span></div>
					</section>
				</section>
				<section className="skills-libs">
					<h3>Libraries/Frameworks</h3>
					<section className="graph-bar">
						<div className="bar"><span className="bar-react">React/Redux</span></div>
						<div className="bar"><span className="bar-express">Express</span></div>
						<div className="bar"><span className="bar-jquery">jQuery</span></div>
						<div className="bar"><span className="bar-less">LESS</span></div>
						<div className="bar"><span className="bar-sass">Sass</span></div>
						<div className="bar"><span className="bar-bootstrap">Bootstrap</span></div>
						<div className="bar"><span className="bar-mocha">Mocha</span></div>
						<div className="bar"><span className="bar-mongoose">Mongoose</span></div>
						<div className="bar"><span className="bar-mithril">Mithril</span></div>
						<div className="bar"><span className="bar-rails">Rails</span></div>
						<div className="bar"><span className="bar-sinatra">Sinatra</span></div>
						<div className="bar"><span className="bar-angular">AngularJS</span></div>
					</section>
				</section>
				<section className="skills-tech">
					<h3>Technologies</h3>
					<section className="graph-bar">
						<div className="bar"><span className="bar-http">HTTP</span></div>
						<div className="bar"><span className="bar-linux">Linux</span></div>
						<div className="bar"><span className="bar-git">Git</span></div>
						<div className="bar"><span className="bar-webpack">Webpack</span></div>
						<div className="bar"><span className="bar-inkscape">Inkscape</span></div>
						<div className="bar"><span className="bar-gimp">Gimp</span></div>
						<div className="bar"><span className="bar-aws">AWS</span></div>
						<div className="bar"><span className="bar-gulp">Gulp</span></div>
					</section>
				</section>
			</div>
		</div>
	);
}

export default Skills;