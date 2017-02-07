import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
//import { createCourt } from '../actions/index';
import { Link } from 'react-router';

class NewCourt extends Component {
	onSubmit(props) {

	}

	render() {
		return (
			<form >
				<h3>Add a new court</h3>

				<div className="form-group">
					<label>Name</label>
					<input type="text" className="form-control" />
				</div>
			</form>
		);
	}
}

export default NewCourt;