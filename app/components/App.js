import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
	render() {
		return (
			<div className="main-container">
				<div className="navbar navbar-default">
					<div className="navbar-header">
						<Link to="/"><span className="navbar-brand logo">Swish</span></Link>
					</div>
					<div className="collapse navbar-collapse navbar-right">
						<ul className="nav navbar-nav">
							<li className="nav-link"><Link to="/about">About</Link></li>
							<li className="nav-link"><Link to="/">Sign Up</Link></li>
							<li className="nav-link"><Link to="/">Log In</Link></li>
						</ul>
					</div>
				</div>
				{this.props.children}
			</div>
		);
	}
}

export default App;