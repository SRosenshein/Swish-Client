import React, { Component } from 'react';
import Search from './Search';
import Map from './Map';
import NewCourt from './NewCourt';
import CourtDetails from './CourtDetails';

class SwishContainer extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-8 pull-left text-center">
						<Search />
						<Map />
						<NewCourt />
					</div>
					<div className="col-md-4 pull-right text-center">
						<CourtDetails />
					</div>
				</div>
			</div>
		);
	}
}

export default SwishContainer;