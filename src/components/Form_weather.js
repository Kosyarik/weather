import React from 'react';

class FormWeather extends React.Component {
	render () {
		return (
			<form onSubmit={this.props.weatherMethot}>
				<input type="text" name="city" placeholder="Місто" />
				<button>отримати погоду</button>
			</form>
		);
	}
}

export default FormWeather;

