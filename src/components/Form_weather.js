import React from 'react';

class FormWeather extends React.Component {
	render () {
		return (
			<form onSubmit={this.props.weatherMethot}>
				<input className = "input_form" type="text" name="city" placeholder="Місто" />
				<button className = "button_set_city">отримати погоду</button>
			</form>
		);
	}
}
export default FormWeather;

