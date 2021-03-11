import React, { useState, useEffect, useCallback } from 'react';
import { useHttp } from './../hooks/httpHook';
//import { useCountry } from './../context/codeContext';

export default function Weather(props) {
    // const [city] = useState('london');
    //const [lang] = useState('en');
    const [weather, setWeather] = useState({
        icon: null,
        temp: null,
        descr: null,
    });

    const { request } = useHttp();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.country.capital}&lang=${props.lang}&appid=7c599ba528ac05000344261f5479e8de&units=metric`;

    const weatherHandler = useCallback(async () => {
        try {
            const data = await request(url, 'GET');
            setWeather({
                icon: data.weather[0].id,
                temp: data.main.temp.toFixed(0),
                descr: data.weather[0].description,
            });
        } catch (e) {}
    }, [url, request]);

    useEffect(() => {
        weatherHandler();
        //setCity(countryParams.capital);
        //console.log(countryParams.capital);
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
