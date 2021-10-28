import React from "react";
import { render } from "react-dom";
import FormWeather from "./components/Form_weather";
import Weather from "./components/Weather";

const API_KEY_Weather = "de855a59e20c06b235e45e945aa55adb";

class App extends React.Component {

	state = {
		temp: undefined,
		city: undefined,
		country: undefined,
		sunrise: undefined,
		sunset: undefined,
		error: undefined
	}

	gettingWeather = async (e) => {
		e.preventDefault ();
		let city = e.target.elements.city.value;


		if(city) {
			const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY_Weather}&units=metric`);
			const data = await api_url.json();
			console.log (data);
			//сонце встає
			let sunset = data.sys.sunset;
			let date = new Date();
			date.setTime(sunset);
			let sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

			this.setState ({
				temp: data.main.temp,
				city: data.name,
				country: data.sys.country,
				sunrise: data.sys.sunrise,
				sunset: sunset_date,
				error: undefined
				
			});
		} else {
			this.setState ({
				temp: undefined,
				city: undefined,
				country: undefined,
				sunrise: undefined,
				sunset: undefined,
				error: "Введіть назву міста"
				
			});
		}
	}
	render() {
		return (
		<div>
			<FormWeather weatherMethot = {this.gettingWeather} />
			<Weather 
			temp={this.state.temp}
			city={this.state.city}
			country={this.state.country}
			sunrise={this.state.sunrise}
			sunset={this.state.sunset}
			error={this.state.error}
			/>
		</div>
	);
	}
}
export default App;