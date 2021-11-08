import React from 'react';

const Weather = (props) => {
	return (
	<div>
	{ props.city &&
	<div>
		<p>Країна: {props.city}, {props.country}</p>
		<div>
      	<img className="weather-icon" src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="weather icon"/>
    	</div> 
		<p>Температура:{props.temp}</p>
		<p>Початок дня:{props.sunrise}</p>
		<p>Сонце сідає:{props.sunset}</p>
	</div>
	}
	<p>{ props.error}</p>

</div>
	)
}

export default Weather;