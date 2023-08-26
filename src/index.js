import React from 'react';
import ReactDOM from 'react-dom';
import leePhoto from './LeeSochay.jpg';

const page = (
    <div>
        <section class="rocks">
            <section class="salutation">
                <h1>Hey, Howdy, Hi!</h1>
                <img src={ leePhoto } alt="Lee Sochay Headshot" width="50" height="60"></img>
                <p>I'm Lee</p>
            </section>
                <ul>
                    <li>A Student at the Michigan State University Coding Bootcamp.</li>
                    <li>Building the foundation of web development with HTML, CSS, and JavaScript.</li>
                    <li>Learning the skills for full-stack development including working with servers, databases, and APIs.</li>
                    <li>Learning to use the cutting-edge tools to optimize applications for speed and efficiency.</li>
                </ul>
        </section>
    </div>
)

// document.getElementById("root").append(JSON.stringify(page))
ReactDOM.render(page, document.getElementById('root'));