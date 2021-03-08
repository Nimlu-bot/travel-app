import React, { useState, useEffect } from 'react';

export default function DateTime() {
    const [date, setDate] = useState({
        date: null,
        hour: null,
        min: null,
        sec: null,
    });

    //const showAmPm = false;
    const dateFormat = { GB: 'en', FR: 'fr', IT: 'it', UA: 'uk', DE: 'de', CZ: 'cs', AT: 'de-AT', ES: 'es' };
    let formatter = new Intl.DateTimeFormat(dateFormat.GB, {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    });

    function addZero(n) {
        return (parseInt(n, 10) < 10 ? '0' : '') + n;
    }
    // Show Time
    function showTime() {
        let today = new Date(),
            hour = today.getHours(),
            min = today.getMinutes(),
            sec = today.getSeconds();
        // Output Time

        // date.innerHTML = `${formatter.format(today)} `
        // time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
        // if (min == 0 && sec == 0) { setBgGreet() }
        // setTimeout(showTime, 1000);
        // console.log(formatter.format(today));
        // console.log(hour);
        // console.log(min);
        // console.log(sec);
        setDate({ date: formatter.format(today), hour: hour, min: addZero(min), sec: addZero(sec) });
        setTimeout(showTime, 1000);
    }
    useEffect(() => {
        showTime();
    }, []);
    // Add Zeros

    return (
        <div className='time-wrapper'>
            <p>{date.date}</p>
            <p>{`${date.hour}:${date.min}:${date.sec}`}</p>
            <button className='getdate'>get</button>
        </div>
    );
}
