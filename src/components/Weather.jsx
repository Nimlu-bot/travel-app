import React, { useState, useEffect, useCallback } from 'react';
import { useHttp } from './../hooks/httpHook';
import PropTypes from 'prop-types';

function Weather(props) {
    const [weather, setWeather] = useState({
        icon: null,
        temp: null,
        descr: null,
    });

    const { request } = useHttp();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.country.capital.name.en}&lang=${props.lang}&appid=7c599ba528ac05000344261f5479e8de&units=metric`;

    const weatherHandler = useCallback(async () => {
        try {
            const data = await request(url, 'GET');
            setWeather({
                icon: data.weather[0].id,
                temp: data.main.temp.toFixed(0),
                descr: data.weather[0].description,
            });
        } catch (e) {
            console.log('error');
        }
    }, [url, request]);

    useEffect(() => {
        weatherHandler();
    }, [weatherHandler]);
    return (
        <div className='weather-wrapper'>
            <i className={`weather-icon owf owf-3x ${weather.icon ? 'owf-' + weather.icon : ''}`}></i>
            <div className='whether-descr-wrapper'>
                <div className='weather-temp'>{weather.temp}°C</div>
                <div className='weather-descr'>{weather.descr}</div>
            </div>
        </div>
    );
}

Weather.propTypes = {
    lang: PropTypes.string,
    country: PropTypes.object,
};

export default Weather;
