import React from 'react';

class FormGeoLocation extends React.Component {
	render () {
		return (
			<form onSubmit={this.props.weatherLocation}>
				
				<button className = "button_location">отримати по локації</button>
			</form>
		);
	}
}

export default FormGeoLocation;
