import React, { useState, useEffect, useCallback } from 'react';
import { useHttp } from './../hooks/httpHook';
import PropTypes from 'prop-types';

function Currency({ iso, currency, lang }) {
    // const curencies = ['usd', 'eur', 'czk', 'gbp', 'uah'];
    const [exchangeRate, setExchangeRate] = useState({
        rate: null,
        usd: null,
        eur: null,
    });

    const { request } = useHttp();
    const urlUSD = `https://www.nbrb.by/api/exrates/rates/usd?parammode=2 `;
    const urlEUR = `https://www.nbrb.by/api/exrates/rates/eur?parammode=2 `;
    const url = `https://www.nbrb.by/api/exrates/rates/${iso}?parammode=2 `;

    const failMessage = {
        en: 'API fail',
        ru: 'Проблема с API',
        ua: 'Проблема з API',
    };
    const helpMessage = {
        en: 'refresh the page',
        ru: 'обновите страницу',
        ua: 'поновіть сторінку',
    };

    const currencyHandler = useCallback(async () => {
        const euroRate = async () => {
            try {
                const data = await request(urlEUR, 'GET');

                return parseFloat(data.Cur_OfficialRate.toFixed(4));
            } catch (e) {
                console.log('error');
            }
        };
        const usdRate = async () => {
            try {
                const data = await request(urlUSD, 'GET');

                return parseFloat(data.Cur_OfficialRate.toFixed(4));
            } catch (e) {
                console.log('error');
            }
        };
        const currentRate = async () => {
            try {
                const data = await request(url, 'GET');

                return parseFloat((data.Cur_OfficialRate / data.Cur_Scale).toFixed(4));
            } catch (e) {
                console.log('error');
            }
        };

        Promise.all([euroRate(), usdRate(), currentRate()]).then((values) => {
            setExchangeRate((exchangeRate) => ({ ...exchangeRate, eur: values[0], usd: values[1], rate: values[2] }));
        });
    }, [request, url, urlUSD, urlEUR]);

    useEffect(() => {
        currencyHandler();
    }, [currencyHandler]);

    return (
        <div className='currency-wrapper'>
            <div className='currency-name'>{currency}</div>
            {exchangeRate.eur && exchangeRate.usd && exchangeRate.rate ? (
                <>
                    <div className='currency-rate'>1€={(exchangeRate.eur / exchangeRate.rate).toFixed(2)}</div>
                    <div className='currency-rate'>1$={(exchangeRate.usd / exchangeRate.rate).toFixed(2)}</div>
                    <div className='currency-rate'>1BYN={(1 / exchangeRate.rate).toFixed(2)}</div>
                </>
            ) : (
                <>
                    <div className='currency-rate'>{failMessage[lang]} </div>
                    <div className='currency-rate'>{helpMessage[lang]} </div>
                </>
            )}
        </div>
    );
}

Currency.propTypes = {
    currency: PropTypes.string,
    iso: PropTypes.string,
    lang: PropTypes.string,
};

export default Currency;
