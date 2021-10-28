import React from 'react';

const Weather = (props) => {
	return (
	<div>
	{ props.city &&
	<div>
		<p>Країна: {props.city}, {props.country}</p>
		<p>Температура:{props.temp}</p>
		<p>Початок дня:{props.sunrise}</p>
		<p>Сонце встає:{props.sunset}</p>
	</div>
	}
	<p>{ props.error}</p>

</div>
	)
}

export default Weather;