import React from 'react';
import leePhoto from '../images/LeeSochay.jpg';

function Header() {
    return (
<header className="header">
    <figure className="headshot">
        <img className="leephoto" src={ leePhoto } alt="Lee Sochay Headshot"></img>
    <figcaption className="caption">Lee Sochay - Full Stack Developer</figcaption>
    </figure>
	<nav className="nav">
	<ul className="nav-list">
        <li><a className="nav-link" href="/">Home</a></li>
        <li><a className="nav-link" href="#about">About</a></li>
        <li><a className="nav-link" href="#projects">Projects</a></li>
        <li><a className="nav-link" href="#contact">Contact</a></li>
	</ul>
    </nav>
</header>
	)}

export default Header