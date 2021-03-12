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
