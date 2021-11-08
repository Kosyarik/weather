import React from 'react';

class FormGeoLocation extends React.Component {
	render () {
		return (
			<form onSubmit={this.props.weatherLocation}>
				
				<button>отримати по локації</button>
			</form>
		);
	}
}

export default FormGeoLocation;
