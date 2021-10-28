import React from 'react';

const Weather = (props) => {
	return (
	<div>
	{ props.city &&
	<div>
		<p>Країна: {this.props.city}, {this.props.country}</p>
		<p>Температура:{this.props.temp}</p>
		<p>Початок дня:{this.props.sunrise}</p>
		<p>Сонце встає:{this.props.sunset}</p>
	</div>
	}
	<p>{ props.error}</p>

</div>
	)
}

export default Weather;