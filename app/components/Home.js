import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
	render() {
		return (
			<div className="jumbotron text-center">
				<h1>Swish</h1>
				<p>The real-time city pickup basketball court finder!</p>
				<Link to="/swish"><button className="btn btn-lg btn-warning">Find a Court!</button></Link>
			</div>
		);
	}
}

export default Home;