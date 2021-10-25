import React from "react";

const CurrentDayWeather = ({ city, country, weatherData, getDay, toCelsius }) => {

    return (
        weatherData[0] ?
            <div className="weather_current_day">
                <div className="weather_current_day__day">{city}, {country} Weather</div>
                <div>{getDay(weatherData[0].dt_txt)}</div>
                <div className="weather_current_day_img">
                    {toCelsius(weatherData[0].main.temp)} ℃ -
                    <div><img alt={weatherData[0].weather[0].description} src={`http://openweathermap.org/img/wn/${weatherData[0].weather[0].icon.replace(/n$/, "d")}.png`} /></div>
                    {weatherData[0].weather[0].main}
                </div>
            </div> : ''
    );
}

export default CurrentDayWeather;