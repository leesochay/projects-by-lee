import React from 'react';
import About from "./About"

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
						<a href="https://leesochay.github.io/prework-study-guide/"><img src="./assets/images/PreworkstudyguideScreenshot.jpg" alt="Screenshot of the Pre-work Study Guide Webpage" /></a>
						<figcaption>Pre-Work Study Guide Screenshot</figcaption>
					</figure>
				</article>
				<article className="next">
					<h3 data-secret="click the picture to see the project" >Code Refractor Challenge</h3>
					<figure className="challenge">
						<a href="https://leesochay.github.io/Horiseon-Code-Refractor-Challenge/"><img src="./assets/images/Module-1-Challenge-screenshot1aScreenshot.jpg" alt="Screenshot of the Horiseon Code Refractor Challenge Webpage" /></a>
						<figcaption>Code Refactor Challenge Screenshot</figcaption>
					</figure>
				</article>
				<article className="next">
					<h3 data-secret="click the picture to see the project" >Professional Portfolio</h3>
					<figure className="challenge">
						<a href="/"><img src="./assets/images/LeeSochayPortfolioScreenshot.jpg" alt="Screenshot of the Porfolio Webpage" /></a>
						<figcaption>Professional Portfolio Screenshot</figcaption>
					</figure>
				</article>
				<article className="next">
					<h3 data-secret="click the picture to see the project" >Future</h3>
					<figure className="challenge">
						<a href="/"><img src="./assets/images/PlaceholderScreenshot.jpg" alt="This is a placeholder" /></a>
						<figcaption>Placeholder</figcaption>
					</figure>
				</article>
			</section>
		</section>
		<section className="contact" id="contact">
				<h2>CONTACT ME</h2>
				<p>Here you will find information about how to contact me.</p>
			<section className="contactinfo">
				<article>
					<h3>email: <a href="mailto:sochaylee@gmail.com">Lee Sochay</a></h3>
				</article>
				<article>
					<h3>phone: (517) 555-0100</h3>
				</article>
				<article>
					<address>123 Anystreet<br />
						Webberville, MI 48892
					</address>
				</article>
			</section>
		</section>
</>
)}

export default Project