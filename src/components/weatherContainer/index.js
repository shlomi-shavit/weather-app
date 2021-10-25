import React from "react";
import Logic from "./index.logic";
import WeatherForm from './weatherForm/'
import CurrentDayWeather from './currentDayWeather/'
import NextDaysWeather from './nextDaysWeather/'

const Weather = () => {

    const {
        input,
        city,
        country,
        weatherData,
        filteredSuggestions,
        loading,
        getDay,
        toCelsius,
        getWeatherData,
        onChangeHandler,
        onClickHandler,
        clearResult
    } = Logic();

    const weatherTypeClass = weatherData.length ? weatherData[0].weather[0].main : '';

    return (
        <div className={`weather ${weatherTypeClass}`}>

            <WeatherForm
                city={city}
                country={country}
                getWeatherData={getWeatherData}
                onChangeHandler={onChangeHandler}
                onClickHandler={onClickHandler}
                clearResult={clearResult}
                filteredSuggestions={filteredSuggestions}
                input={input}
                loading={loading}
            />

            <CurrentDayWeather
                city={city}
                country={country}
                weatherData={weatherData}
                getDay={getDay}
                toCelsius={toCelsius}
            />

            <NextDaysWeather
                weatherData={weatherData}
                getDay={getDay}
                toCelsius={toCelsius}
            />

        </div>
    );
};

export default Weather;