import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllCourts } from '../actions/index';
import Spinner from 'react-spinkit';

import Search from './Search';
import Map from './Map';
import NewCourt from './NewCourt';
import CourtDetails from './CourtDetails';

class SwishContainer extends Component {
	componentDidMount() {
		this.props.fetchAllCourts();
	}

	render() {
		console.log("render");
		if (!this.props.courtsList.length > 0) {
			return <Spinner spinnerName="wandering-cubes" className="spinner" noFadeIn />;
		}
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-8 pull-left text-center">
						<div className="row" >
							<div className="col-md-6">
								<Search />
							</div>
							<div className="col-md-6">
								<NewCourt />
							</div>
						</div>
						<div className="map-container">
							<Map courtsList={this.props.courtsList} />
						</div>
					</div>
					<div className="col-md-4 pull-right text-center">
						<CourtDetails />
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.log("mapStateToProps");
	return {courtsList: state.courts.courtsList};
}

export default connect(mapStateToProps, { fetchAllCourts })(SwishContainer);