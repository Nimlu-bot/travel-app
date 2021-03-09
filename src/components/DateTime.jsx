import React, { useState, useEffect } from 'react';

export default function DateTime() {
    const [date, setDate] = useState({
        date: null,
        hour: null,
        min: null,
        sec: null,
    });

    const dateFormat = { GB: 'en', FR: 'fr', IT: 'it', UA: 'uk', DE: 'de', CZ: 'cs', AT: 'de-AT', ES: 'es' };
    let formatter = new Intl.DateTimeFormat(dateFormat.GB, {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    });

    function addZero(n) {
        return (parseInt(n, 10) < 10 ? '0' : '') + n;
    }

    function showTime() {
        const today = new Date();
        const hour = today.getHours();
        const min = today.getMinutes();
        const sec = today.getSeconds();

        setDate({ date: formatter.format(today), hour: hour, min: addZero(min), sec: addZero(sec) });
        setTimeout(showTime, 1000);
    }
    useEffect(() => {
        showTime();
    }, []);
    
    return (
        <div className='time-wrapper'>
            <p>{date.date}</p>
            <p>{`${date.hour}:${date.min}:${date.sec}`}</p>
        </div>
    );
}
