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
    const offset = parseInt(props.timeZone);
    moment.locale(lang);
    const dateNow = moment()
        .utcOffset(60 * offset)
        .format('dddd, MMMM DD YYYY, HH:mm:ss')
        .split(',');
    useEffect(() => {
        const intervalID = setInterval(() => setDate(dateNow), 1000);
        return () => clearTimeout(intervalID);
    }, [dateNow]);

    return (
        <div className='time-wrapper'>
            <p>{date[0]}</p>
            <p>{date[1]}</p>
            <p>{date[2]}</p>
        </div>
    );
}

DateTime.propTypes = {
    lang: PropTypes.string,
    timeZone: PropTypes.string,
};

export default DateTime;
