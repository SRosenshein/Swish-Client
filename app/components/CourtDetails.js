import React, { Component } from 'react';
import { connect } from 'react-redux';

class CourtDetails extends Component {
	render() {
		if (this.props.currentCourt === null) {
			return <h1 className="well">Select on map or Search for a court to get started!</h1>;
		}
		const { name, address, description, status } = this.props.currentCourt;
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h1 className="panel-title">{name}</h1>
				</div>
				<div className="panel-body">
					<h3>{address}</h3>
					<p>description</p>
					<h4>Status: {status}</h4>
					<a className="btn btn-primary">Request Status Update</a>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		currentCourt: state.courts.currentCourt
	};
}

export default connect(mapStateToProps)(CourtDetails);