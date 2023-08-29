import React from 'react';
import About from "./About"
import prework from '../images/PreworkstudyguideScreenshot.jpg';
import refractor from '../images/Refractor-Challenge.jpg';
import proport from '../images/LSPortfolioScreenshot.jpg';
import placeholder from '../images/placeholder.jpg';
import background from '../images/SuperiorRocks.jpg';

function Project () {
	return (
<>
<section className="rocks">
                <ul className="highlights">
                    <li>A Student at the Michigan State University Coding Bootcamp.</li>
                    <li>Building the foundation of web development with HTML, CSS, and JavaScript.</li>
                    <li>Learning the skills for full-stack development including working with servers, databases, and APIs.</li>
                    <li>Learning to use the cutting-edge tools to optimize applications for speed and efficiency.</li>
                </ul>
        </section>
        <About />
		<section className="projects" id="projects">
			<h2>PROJECTS</h2>
			<p>Here you will find information about the projects that I am working on in Bootcamp.</p>
			<section className="currentprojects">
				<article  className="firstone">
					<h3 data-secret="click the picture to see the project" >Pre-work Study Guide</h3>
					<figure className="challenge">
						<a href="https://leesochay.github.io/prework-study-guide/"><img className="prework" src={ prework } alt="Screenshot of the Pre-work Study Guide Webpage"></img></a>
						<figcaption>Pre-Work Study Guide Screenshot</figcaption>
					</figure>
				</article>
				<article className="next">
					<h3 data-secret="click the picture to see the project" >Code Refractor Challenge</h3>
					<figure className="challenge">
						<a href="https://leesochay.github.io/Horiseon-Code-Refractor-Challenge/"><img className="refractor" src={ refractor } alt="Screenshot of the Horiseon Code Refractor Challenge Webpage" /></a>
						<figcaption>Code Refactor Challenge Screenshot</figcaption>
					</figure>
				</article>
				<article className="next">
					<h3 data-secret="click the picture to see the project" >Professional Portfolio</h3>
					<figure className="challenge">
						<a href="https://leesochay.github.io/Lee-Sochay-Portfolio/"><img className="proport" src={ proport } alt="Screenshot of the Porfolio Webpage" /></a>
						<figcaption>Professional Portfolio Screenshot</figcaption>
					</figure>
				</article>
				<article className="next">
					<h3 data-secret="click the picture to see the project" >Future</h3>
					<figure className="challenge">
						<a href="/"><img className="placeholder" src={ placeholder } alt="This is a placeholder" /></a>
						<figcaption>Placeholder</figcaption>
					</figure>
				</article>
			</section>
		</section>
		<section className="contact" id="contact" style={{backgroundImage: `url(${background})`}}>
				<h2>CONTACT ME</h2>
				<p>Here you will find information about how to contact me.</p>
			<section className="contactinfo">
				<article className="contact-item">
					<h3>email: <a className="email" href="mailto:sochaylee@gmail.com">Lee Sochay</a></h3>
				</article>
				<article className="contact-item">
					<h3>phone: (517) 555-0100</h3>
				</article>
				<article className="contact-item">
					<address>123 Anystreet<br />
						Webberville, MI 48892
					</address>
				</article>
			</section>
		</section>
</>
)}

export default Project