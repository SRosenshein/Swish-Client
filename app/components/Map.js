import React, { Component } from 'react';
import { GoogleMap, Marker, withGoogleMap, InfoWindow } from 'react-google-maps';
import { Link } from 'react-router';

const maxSize = <div style={{ height: '100%', width: '100%' }} />;
const image = {
	url: require('../utils/img/bballPic.png'),
	scaledSize: new google.maps.Size(20, 20)
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
				onClick={() => props.onMarkerClick(court)} >
				{court.showInfo && (
					<InfoWindow onCloseClick={() => props.onMarkerClose(court)}>
						<div>
							<p>{court.name}</p>
							<small>Click for more info</small>
						</div>
					</InfoWindow>
				)}
			</Marker>
		))}
	</GoogleMap>
));

class Map extends Component {
	constructor(props) {
		super(props);

		this.state = {
			defaultCenter: {
				lat: 40.7829,
				lng: -73.9654
			},
			markers: []
		};
	}

	componentWillMount() {
		const courtsMarkers = this.props.courtsList.map(court => {
			return {
				...court,
				showInfo: false
			};
		});
		this.setState({ markers: courtsMarkers });
	}

	handleMarkerClick(targetMarker) {
		this.setState({
			markers: this.state.markers.map(marker => {
				if (marker === targetMarker) {
					return {
						...marker,
						showInfo: true
					};
				}
				return marker;
			})
		});
	}

	handleMarkerClose(targetMarker) {
		this.setState({
			markers: this.state.markers.map(marker => {
				if (marker === targetMarker) {
					return {
						...marker,
						showInfo: false
					};
				}
				return marker;
			})
		});
	}

	render() {
		return (
			<SwishGoogleMap
				containerElement={maxSize}
				mapElement={maxSize}
				center={this.state.defaultCenter}
				courtsList={this.state.markers}
				image={image}
				onMarkerClick={this.handleMarkerClick.bind(this)}
				onMarkerClose={this.handleMarkerClose.bind(this)}
			/>
		);
	}
}

export default Map;