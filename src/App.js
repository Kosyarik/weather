import React from "react";
import moment from 'moment';
import FormGeoLocation from "./components/Form_geolocation";

import FormWeather from "./components/Form_weather";
import Weather from "./components/Weather";

const API_KEY_Weather = "de855a59e20c06b235e45e945aa55adb";

class App extends React.Component {

	state = {
		lat: undefined,
		lon: undefined, 
		temp: undefined,
		city: undefined,
		country: undefined,
		sunrise: undefined,
		sunset: undefined,
		error: undefined
	}


	//позиція
	getPosition = () => {
		return new Promise(function (resolve, reject) {
		  navigator.geolocation.getCurrentPosition(resolve, reject);
		});    
	 }
	 getWeather = async (latitude, longitude) => { 
		const api_call = await fetch(`//api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY_Weather}&units=metric`);
		const data = await api_call.json();   
		console.log(data); 
		this.setState({
		  lat: latitude,
		  lon: longitude,
		  city: data.name,
		  temp: data.main.temp,
		  icon: data.weather[0].icon,
		  sunrise: moment.unix(data.sys.sunrise).format("hh:mm "),
		  sunset: moment.unix(data.sys.sunset).format("hh:mm "),
		})
	 }
  
	 componentDidMount() {
		this.getPosition()
		.then((position) => {      
		  this.getWeather(position.coords.latitude, position.coords.longitude)
		})
		.catch((err) => {
		  this.setState({ errorMessage: err.message });
		});
  
		this.timerID = setInterval(        
		  () => 
		  this.getWeather(this.state.lat, this.state.lon),
		  60000
		);
	 }
  
	 componentWillUnmount() {
		clearInterval(this.timerID);
	 }


	 //звичана погода
	gettingWeather = async (e) => {
		e.preventDefault ();
		let city = e.target.elements.city.value;

		if(city) {
			const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY_Weather}&units=metric`);
			const data = await api_url.json();
			//console.log (data);
			
			

			this.setState ({
				temp: data.main.temp,
				city: data.name,
				country: data.sys.country,
				icon: data.weather[0].icon,
				sunrise: moment.unix(data.sys.sunrise).format("hh:mm "),
				sunset: moment.unix(data.sys.sunset).format("hh:mm "),
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
		<div className = "container">
			<FormGeoLocation weatherLocation = {this.getWeather} />
			
			<FormWeather weatherMethot = {this.gettingWeather} />
			<Weather 
			temp={this.state.temp}
			city={this.state.city}
			icon={this.state.icon}
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