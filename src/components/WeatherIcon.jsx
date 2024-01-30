import React from 'react';
import clear_icon from "../icons/clear.png";
import drizzle_icon from "../icons/drizzle.png";
import rain_icon from "../icons/rain.png";
import snow_icon from "../icons/snow.png";

/* 
    WeatherIcon Component
    
   - Displays a weather icon based on the icon code received as a prop.
   - Renders different weather icons based on the icon code suffix and conditions.
*/

const WeatherIcon = ({ iconCode }) => {
    // If the icon data from the API is of the below codes, set the icon of the weather accordingly 
    if (iconCode.endsWith("d")) {
        // It's day
        if (iconCode.includes("01") || iconCode.includes("02")) {
            return <img src={clear_icon} alt="" />;
        } else if (iconCode.includes("03") || iconCode.includes("04")) {
            return <img src={drizzle_icon} alt="" />;
        } else if (iconCode.includes("09") || iconCode.includes("10")) {
            return <img src={rain_icon} alt="" />;
        } else if (iconCode.includes("13")) {
            return <img src={snow_icon} alt="" />;
        } else {
            return <img src={clear_icon} alt="" />;
        }
    } else if (iconCode.endsWith("n")) {
        // It's night
        if (iconCode.includes("01") || iconCode.includes("02")) {
            return <img src={clear_icon} alt="" />;
        } else if (iconCode.includes("03") || iconCode.includes("04")) {
            return <img src={drizzle_icon} alt="" />;
        } else if (iconCode.includes("09") || iconCode.includes("10")) {
            return <img src={rain_icon} alt="" />;
        } else if (iconCode.includes("13")) {
            return <img src={snow_icon} alt="" />;
        } else {
            return <img src={clear_icon} alt="" />;
        }
    }
};

export default WeatherIcon;