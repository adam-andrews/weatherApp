import React, { useEffect } from 'react';
import './App.css';

import axios from 'axios';

const options = {
	method: 'GET',
	url: 'https://community-open-weather-map.p.rapidapi.com/weather',
	params: {
		q: 'London,uk',
		lat: '0',
		lon: '0',
		callback: 'test',
		id: '2172797',
		lang: 'null',
		units: 'imperial',
		mode: 'xml',
	},
	headers: {
		'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
		'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
	},
};

function App() {
	useEffect(() => {
		axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (error) {
				console.error(error);
        console.log(process.env.RAPID_API_KEY)
			});
	}, []);
	return <div className="App">Weather App
  {process.env.REACT_APP_SECRET_NAME}</div>;
}

export default App;
