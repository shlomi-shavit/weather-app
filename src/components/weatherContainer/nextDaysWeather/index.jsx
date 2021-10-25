import React from "react";

let currentDay = new Date().getDay();

const NextDaysWeather = ({ weatherData, getDay, toCelsius }) => {

    return (
        weatherData ? <div className="weather_next_days">
            {weatherData.map((dayData, index) => {
                if (currentDay !== new Date(dayData.dt_txt).getDay()) {
                    currentDay = new Date(dayData.dt_txt).getDay();

                    return (
                        <div key={index}>
                            <div className="weather_next_days__day">{getDay(dayData.dt_txt)}</div>
                            {dayData.weather[0].description}
                            <br />
                            <img alt={dayData.weather[0].description} src={`http://openweathermap.org/img/wn/${dayData.weather[0].icon.replace(/n$/, "d")}.png`} />
                            <br />
                            {toCelsius(dayData.main.temp) + ' ℃'}
                        </div>
                    )
                }
                return null
            })}
        </div> : ''
    );
}

export default NextDaysWeather;