import { useState } from "react";

const Logic = () => {

    const [input, setInput] = useState("");
    const [city, setCity] = useState(""); // can use user location by default
    const [country, setCountry] = useState("");
    const [weatherData, setWeatherData] = useState([]);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [countryAndCities, setCountryAndCities] = useState([]);
    const [loading, setLoading] = useState(false);

    const getDay = (date) => {
        const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        const getDay = new Date(date).getDay();
        return days[getDay]
    }

    const toCelsius = (temp) => {
        return Math.round(temp - 273.15)
    };

    const getWeatherData = (city, country) => {

        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=e6c82c750c8e65f025905f7a949396fb`)
            .then(response => response.json())
            .then(response => {
                // console.log('response: ', response)
                if (response.cod === '200') {
                    setWeatherData(response.list);
                } else {
                    // setErrorMessage(true)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const onChangeHandler = (e) => {
        setLoading(true)
        if (countryAndCities.length === 0) {
            fetch(`https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json`)
                .then(response => response.json())
                .then(response => {
                    setCountryAndCities(response);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }

        const userInput = e.target.value.toLowerCase();

        const filterLocations = countryAndCities.filter(location => {
            return location.name.toLowerCase().includes(userInput)
        });

        if (e.target.value.length > 1 && showSuggestions) {
            setFilteredSuggestions(filterLocations);
            setTimeout(() => { setLoading(false) }, 500)
        }
        else if (e.target.value.length < 2) {
            setTimeout(() => { setLoading(false) }, 500);
            setFilteredSuggestions([]);
        }
        else {
            setLoading(true);
        }

        setInput(e.target.value);
        setShowSuggestions(true);
    };

    const onClickHandler = (e) => {
        setCity(filteredSuggestions[0].name);
        setCountry(filteredSuggestions[0].country);
        setFilteredSuggestions([]);
        setInput(e.target.innerText);
        setShowSuggestions(false);
        setLoading(false);
        getWeatherData(filteredSuggestions[0].name, filteredSuggestions[0].country);
        return ''
    };

    const clearResult = () => {
        setInput("");
        setWeatherData([]);
        setShowSuggestions(false);
        setFilteredSuggestions([]);
    }

    return {
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
    };
};

export default Logic;
