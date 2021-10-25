import React from "react";

const weatherForm = ({ input, filteredSuggestions, loading, onChangeHandler, onClickHandler, clearResult }) => {

    return (
        <div className="weather_form">
            {loading ? <div className="weather_form__loader"></div> : ''}

            <div className="weather_form__input_wrapper">
                {input.length > 0 ? <div className="weather_form__clear" onClick={clearResult}>x</div> : ''}
                <input
                    type="text"
                    onChange={onChangeHandler}
                    value={input}
                    placeholder="Location"
                />
            </div>

            {filteredSuggestions
                ?
                <ul className="weather_form_suggestions">
                    {filteredSuggestions.map(suggestion => {
                        return (
                            <li key={suggestion.geonameid} onClick={onClickHandler}>
                                {suggestion.name}, {suggestion.country}
                            </li>
                        );
                    })}
                </ul>
                :
                <div className="weather_form_no-suggestions">
                    No suggestions
                </div>}
        </div>
    );
}

export default weatherForm;