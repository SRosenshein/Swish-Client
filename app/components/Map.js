import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { GoogleMap, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';

const image = {
	url: require('../utils/img/bballPic.png'),
	scaledSize: new google.maps.Size(20, 20)
};

const SwishGoogleMap = withGoogleMap(props => (
	<GoogleMap
		defaultZoom={15}
		defaultCenter={{lat: 40.7829, lng: -73.9654}}
		options={{streetViewControl: false, mapTypeControl: false}} >
		{props.courtsList.map(court => (
			<Marker 
				key={court.id}
				position={{lat: parseFloat(court.latitude), lng: parseFloat(court.longitude)}}
				defaultAnimation={2}
				title={court.name}
				icon={image} >
			</Marker>
		))}
	</GoogleMap>
));

class Map extends Component {
	render() {
		return (
			<SwishGoogleMap
				containerElement={ <div className="map-container" /> }
				mapElement={ <div style={{ height: '100%' }} /> }
				courtsList={this.props.courtsList}
			/>
		);
	}
}

Map.propTypes = {
	courtsList: PropTypes.array.isRequired
}

export default Map;