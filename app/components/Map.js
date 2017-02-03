import React, { Component } from 'react';
import { Link } from 'react-router';
import { GoogleMap, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';

const SwishGoogleMap = withGoogleMap(props => (
	<GoogleMap
		defaultZoom={15}
		defaultCenter={{lat: 40.7829, lng: -73.9654}}
	/>
));

class Map extends Component {
	render() {
		return (
			<SwishGoogleMap
				containerElement={<div style={{ height: 500, width: 600, margin: 'auto', padding: 15 }} />}
				mapElement={
					<div style={{height: '100%', width: '100%'}} />
				}
			/>
		);
	}
}

// class Map extends Component {
// 	render() {
// 		return (
// 			<h2>Map Component</h2>
// 		);
// 	}
// }

export default Map;