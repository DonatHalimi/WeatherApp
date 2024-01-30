import React, { useState, useEffect } from 'react';
import '../styles/WeatherAppStyle.css';
import search_icon from "../icons/search.png";
import WeatherIcon from './WeatherIcon';
import WeatherInfo from './WeatherInfo';
import { toast } from 'react-toastify';

/* 
    WeatherApp Component
    
   - Implements a weather application that allows users to search for weather conditions based on city names.
   - Fetches weather data from the OpenWeatherMap API.
   - Displays the current weather icon, temperature, and location.
   - Provides a search input with a search icon for user interaction.
   - Utilizes React Hooks for state management.
   - Utilizes useEffect to attach an event listener for the Enter key.
*/

const WeatherApp = () => {
    const API_KEY = "94af32bbb9ca739e25a41d496badba5f";

    const [wicon, setWicon] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [showWeather, setShowWeather] = useState(false);

    useEffect(() => {
        // Attach event listener for Enter key on component mount
        window.addEventListener('keydown', handleKeyDown);
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleKeyDown = (event) => {
        // Check if the pressed key is Enter (key code 13)
        if (event.keyCode === 13) {
            search();
        }
    };

    const search = async () => {
        const element = document.getElementsByClassName("cityInput");
        const cityName = element[0].value;

        if (cityName === "") {
            // Display toast notification if no city is typed
            toast.info("Please enter a city name.");
            return;
        }

        // URL for fetching the data from the API_KEY
        let URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=Metric&APPID=${API_KEY}`;

        try {
            // Saving the response from the URL
            let response = await fetch(URL);

            if (!response.ok) {
                // Display toast notification if the city doesn't exist in the API
                toast.info(`City '${cityName}' not found. Please enter a valid city name.`);
                return;
            }

            // Saving the data from the response
            let data = await response.json();
            setWeatherData(data);

            const iconCode = data.weather[0].icon;
            setWicon(iconCode);

            // Update state to show weather data
            setShowWeather(true);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }

    // JSX Rendering
    return (
        <div className={`container ${showWeather ? 'with-background' : ''}`}>
            <div className='top-bar'>
                <input type='text' className='cityInput' placeholder='Search a city...' />
                <div className="search-icon" onClick={() => { search() }}>
                    <img src={search_icon} alt="" />
                </div>
            </div>
            {showWeather && (
                <>
                    <div className="weather-image">
                        {wicon && <WeatherIcon iconCode={wicon} />}
                    </div>
                    <div className="weather-temp">
                        {weatherData && Math.floor(weatherData.main.temp) + "°C"}
                    </div>
                    <div className="weather-location">
                        {weatherData && weatherData.name}
                    </div>
                    {weatherData && <WeatherInfo data={weatherData} />}
                </>
            )}
        </div>
    );
};

export default WeatherApp;