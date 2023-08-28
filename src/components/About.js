import React from 'react';

function About () {
    return (
<section className="about">
    <h2>ABOUT ME</h2>
    <p>Here you will find information about me, like my formal education, where I've worked,<br />
            professional organizations, publications, and the new skills I am developing.</p>
    <section className="aboutarticles">
        <article>
            <h3>Education</h3>
            <ul>
                <li>Wayne State University Detroit, MI</li>
                <li>Master of Library & Information Science</li>
                <li>Graduate Certificate: Information Management with emphasis on Web Design and Development</li>
                <li>&nbsp;</li>
                <li>Michigan Technological University, Houghton, MI</li>
                <li>Bachelor of Science Electrical Engineering</li>
            </ul>
        </article>
        <article>
            <h3>Where I've Worked</h3>
            <section className="worked">
                <p>SAGE Publishing, Thousand Oaks, California<br />
                    Library Sales Manager
                </p>
                <ul>
                    <li>Responsible for sales of digital library products supporting academic research libraries in the Great Lakes region (MI, WI,IL,IN, OH)</li>
                    <li>Attained sales goal in 2019. 2020, and 2021</li>
                    <li>Sales Rookie of the Year Award for 2019</li>
                </ul>
            </section>
            <section className="worked">
                <p>Michigan State University Libraries, East Lansing, Michigan<br />
                    Head of Acquisitions and Systems Librarian
                </p>
                <ul>
                    <li>Management of the Acquisitions Unit</li>
                    <li>Licensing and acquisition responsibilities for streaming video resources</li>
                    <li>Led in the on-time implementation of Summon 2.0, the Library’s discovery tool</li>
                    <li>Assisted in the development of the Libraries new Drupal website</li>
                    <li>Assisted in the maintenance of the MSU Libraries Drupal website through the review and publishing of webpages</li>
                    <li>Responsible for working on Turfgrass Information Center webpages with the collaborative completion of the Turfgrass Information Center website for the USGA</li>
                </ul>
            </section>
            <section className="worked">
                <p>Fort Myers Beach Library, Fort Myers Beach, Florida<br / >
                    Electronic Services Librarian
                </p>
                <ul>
                    <li>Responsible for all updates to the website</li>
                    <li>Configured the wifi access point including the content filtering service</li>
                    <li>Procured server hardware and software for a new RFID system</li>
                </ul>
            </section>
        </article>
        <article>
            <h3>Professional Organization Experience</h3>
            <ul>
                <li>American Library Association - Affiliates Relation Committee – Committee Member</li>
                <li>Publisher-Vendor-Library Relations Interest Group - Co-Chair</li>
                <li>Acquisitions Managers and Vendors Interest Group - Co-Chair</li>
                <li>American Indian Library Association</li>
                <li>Big Ten Academic Allaince Discussion Group for Heads of Acquisitions</li>
                <li>EAGLE Committee (Educating Anishnabe: Giving, Learning and Empowering)</li>
            </ul>
        </article>
        <article>
            <h3>Publications</h3>
            <ul>
                <li>Sochay, Lee and Ranti Junus. "From Summon to SearchPlus: The RFP Process for a Discovery Tool at the MSU Libraries."  In Library Technology Funding, Planning, and Deployment, ed. Edward Iglesias, 72-98 (2017). doi:10.4018/978-1-5225-1735-1.ch005</li>
                <li>&nbsp;</li>
                <li>Sochay, Lee. "RFPs for Library Collections: Preparing Writing, Evaluating, and Follow-Up."  In The Complete Guide to RFPs for Libraries, eds. Wilkinson, Frances and Bordeianu, Sever, (2018).  Retrieved from http://publisher.abc-clio.com/9781440859403</li>
            </ul>
        </article>
        <article>
            <h3>Skills</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
        </article>
    </section>
</section>
)}

export default About