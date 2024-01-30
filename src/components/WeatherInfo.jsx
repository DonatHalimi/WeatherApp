import React from 'react';

/* 
    WeatherInfo Component
    
   - Displays weather-related information like humidity and wind speed.
   - Receives weather data as a prop.
   - Extracts humidity and wind speed from the data.
   - Renders a data container with humidity and wind speed elements.
*/

const WeatherInfo = ({ data }) => {
    const humidity = data.main.humidity + "%";
    const wind = Math.floor(data.wind.speed) + " km/h";

    // JSX Rendering
    return (
        <div className="data-container">
            <div className="element">
                <div className="data">
                    <div className="humidity-percentage">{humidity}</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <div className="data">
                    <div className="wind-rate">{wind}</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    );
};

export default WeatherInfo;