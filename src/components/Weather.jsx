import React, { useState } from 'react';
import { useHttp } from './../hooks/httpHook';

//const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=7c599ba528ac05000344261f5479e8de&units=metric`;

export default function Wether() {
    const [city, setcity] = useState('london');
    const [lang, setLang] = useState('ru');
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

            // console.log(`icon ${data.weather[0].id}`);
            // console.log(`temp ${data.main.temp.toFixed(0)}°C`);
            // console.log(`descr ${data.weather[0].description}`);
            setWether({
                icon: data.weather[0].id,
                temp: data.main.temp.toFixed(0),
                descr: data.weather[0].description,
            });
        } catch (e) {}
    };
    console.log(wether);
    return (
        <div className='wether-wrapper'>
            <i className={`weather-icon owf owf-3x ${wether.icon ? 'owf-' + wether.icon : ''}`}></i>
            <div className='whether-descr-wrapper'>
                <div className='wether-temp'>{wether.temp}°C</div>
                <div className='wether-descr'>{wether.descr}</div>
            </div>
            <button className='wether-button' onClick={wetherHandler}>
                get
            </button>
        </div>
    );
}
