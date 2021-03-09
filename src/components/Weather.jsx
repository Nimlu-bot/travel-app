import React, { useState, useEffect } from 'react';
import { useHttp } from './../hooks/httpHook';

export default function Wether() {
    const [city, setCity] = useState('london');
    const [lang, setLang] = useState('en');
    const [wether, setWether] = useState({
        icon: null,
        temp: null,
        descr: null,
    });
    const { loading, request, error, clearError } = useHttp();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=7c599ba528ac05000344261f5479e8de&units=metric`;

    const wetherHandler = async () => {
        try {
            const data = await request(url, 'GET');
            setWether({
                icon: data.weather[0].id,
                temp: data.main.temp.toFixed(0),
                descr: data.weather[0].description,
            });
        } catch (e) {}
    };

    useEffect(() => {
        wetherHandler();
    }, []);
    return (
        <div className='wether-wrapper'>
            <i className={`weather-icon owf owf-3x ${wether.icon ? 'owf-' + wether.icon : ''}`}></i>
            <div className='whether-descr-wrapper'>
                <div className='wether-temp'>{wether.temp}°C</div>
                <div className='wether-descr'>{wether.descr}</div>
            </div>
        </div>
    );
}
