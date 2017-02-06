import React, { Component } from 'react';
import { GoogleMap, Marker, withGoogleMap, InfoWindow } from 'react-google-maps';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { selectCourt } from '../actions/index';

const maxSize = <div style={{ height: '100%', width: '100%' }} />;
const image = {
	url: require('../utils/img/bballPic.png'),
	scaledSize: new google.maps.Size(20, 20)
};
const defaultCenter = {
	lat: 40.7829,
	lng: -73.9654
};

const SwishGoogleMap = withGoogleMap(props => (
	<GoogleMap
		defaultZoom={14}
		defaultCenter={props.center}
		options={{ streetViewControl: false, mapTypeControl: false }} >
		{props.courtsList.map(court => (
			<Marker
				key={court.id}
				position={{ lat: parseFloat(court.latitude), lng: parseFloat(court.longitude) }}
				defaultAnimation={2}
				title={court.name}
				icon={props.image}
				onClick={() => props.onMarkerClick(court)} />
		))}
	</GoogleMap>
));

class Map extends Component {
	handleMarkerClick(targetMarker) {
		this.props.selectCourt(targetMarker);
	}

	render() {
		return (
			<SwishGoogleMap
				containerElement={maxSize}
				mapElement={maxSize}
				center={defaultCenter}
				courtsList={this.props.courtsList}
				image={image}
				onMarkerClick={this.handleMarkerClick.bind(this)}
			/>
		);
	}
}

export default connect(null, { selectCourt })(Map);