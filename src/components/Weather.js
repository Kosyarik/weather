import React from 'react';
import './App.css';
const Weather = (props) => {
	return (
	<div className = "container">
	{ props.city &&
	<div className = "weather_box">
		<div className="weather-item">Країна: {props.city}, {props.country}</div>
		<div>
      	<img className="weather-icon" src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="weather icon"/>
    	</div> 
		 <div className="weather-item">Температура:{props.temp}</div>
		 <div className="weather-item">Початок дня:{props.sunrise}</div>
		 <div className="weather-item">Сонце сідає:{props.sunset}</div>
	</div>
	}
	<p>{ props.error}</p>

</div>
	)
}

export default Weather;