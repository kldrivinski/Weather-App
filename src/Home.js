import React, { useEffect, useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function Home() {



    let temp = "";
    let location = "";
    let cloudDescription = "";
    let cloudImage = "";
    let cloudImageLink = "";

    const [weather, setWeather] = useState([]);


    //de-structure location to be able to pass the params

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getWeather);
            //userLocation.coords.latitude & userLocation.coords.longitude
        } else {
            console.error("not happening");
        }
    }


    const getWeather = async userLocation => {
        console.log(userLocation)

        const { coords: { latitude, longitude } } = userLocation;

        console.log(latitude)
        const data = await fetch(`http://api.openweathermap.org/data/2.5/find?lat=${latitude}&lon=${longitude}&cnt=1&APPID=3b55197b90c59c6985027f1db1eed531`);
        const currentWeather = await data.json();
        console.log(currentWeather);
        setWeather(currentWeather.list[0]);



    };



    if (weather.length !== 0) {

        location = <h1>{weather.name} </h1>
        temp = <h1> temperature: {Math.round(((Number(weather.main.temp) - 273.15) * 9) / 5 + 32)} F</h1>
        cloudDescription = <h1>{weather.weather[0].description}</h1>
        cloudImage = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
        cloudImageLink = <img src={cloudImage} alt="cloud icon" />
    }
    else {
        temp = <p>press the button to see the weather</p>
    }


    return (
        <div className="Home">

            <button onClick={getLocation}>weather or not</button>

            <div className="Results">
                {location}
                {cloudImageLink}

                {temp}
                {cloudDescription}
            </div>
        </div>
    );
}

export default Home;
