import React, { useState, useEffect } from 'react';
//import Moment from 'react-moment';
import moment from 'moment';
import 'moment/locale/fr';
import 'moment/locale/ru';
import 'moment/locale/uk';
//import 'moment-timezone';
import PropTypes from 'prop-types';

function DateTime(props) {
    const [date, setDate] = useState('');
    // const [date, setDate] = useState({
    //     date: null,
    //     hour: null,
    //     min: null,
    //     sec: null,
    // });
    // let timerId = null;
    // // const correction = 3;

    // const dateFormat = { GB: 'en', FR: 'fr', IT: 'it', UA: 'uk', DE: 'de', CZ: 'cs', AT: 'de-AT', ES: 'es' };
    // let formatter = new Intl.DateTimeFormat(dateFormat.GB, {
    //     weekday: 'long',
    //     month: 'long',
    //     day: 'numeric',
    // });

    // function addZero(n) {
    //     return (parseInt(n, 10) < 10 ? '0' : '') + n;
    // }

    // function showTime() {
    //     let today = new Date();
    //     if (today.getHours() - 3 + props.timeZone < 0) {
    //         today.setDate(today.getDate() - 1);
    //     }
    //     const hour = today.getHours() - 3 + props.timeZone;
    //     const min = today.getMinutes();
    //     const sec = today.getSeconds();

    //     setDate({ date: formatter.format(today), hour: hour, min: addZero(min), sec: addZero(sec) });
    //     timerId = setTimeout(showTime, 1000);
    // }

    // useEffect(() => {
    //     showTime();
    //     return () => {
    //         clearTimeout(timerId);
    //     };
    //     // return clearTimeout(timerId);
    // }, []);
    // const [time, setTime] = useState(null);
    // // setInterval(function timer() {
    // //     setTime(moment.tz('Asia/Dubai').format('HH:mm'));
    // // }, 1000);
    const lang = props.lang === 'ua' ? 'uk' : props.lang;
    const offset = 3;
    moment.locale(lang);
    const dateNow = moment()
        .utcOffset(60 * offset)
        .format('dddd, MMMM DD YYYY, hh:mm:ss')
        .split(',');
    useEffect(() => {
        const intervalID = setInterval(() => setDate(dateNow), 1000);
        return () => clearTimeout(intervalID);
    }, [dateNow]);

    return (
        <div className='time-wrapper'>
            <span>{date[0]}</span>
            <span>{date[1]}</span>
            <span>{date[2]}</span>
            {/* <p>{date.date}</p>
            <p>{`${date.hour}:${date.min}:${date.sec}`}</p> */}
        </div>
    );
}

DateTime.propTypes = {
    lang: PropTypes.string,
};

export default DateTime;
