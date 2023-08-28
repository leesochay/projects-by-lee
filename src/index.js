import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./components/Header"
import Project from "./components/Project"
import Footer from "./components/Footer"

function App() {
    return (
<div>
	<Header />
	<Project />
	<Footer />
</div>
)}

ReactDOM.render(
	<App />,
	document.getElementById('root')
	);