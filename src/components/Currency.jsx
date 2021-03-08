import React, { useState } from 'react';
import { useHttp } from './../hooks/httpHook';

export default function Currency() {
    const [cur, setcur] = useState('gbp');
    const [lang, setLang] = useState('ru');
    const curencies = ['usd', 'eur', 'czk', 'gbp', 'uah'];
    const [exchangeRate, setExchangeRate] = useState({
        rate: 1,
        usd: 1,
        eur: 1,
    });
    const { loading, request, error, clearError } = useHttp();
    const urlUSD = `https://www.nbrb.by/api/exrates/rates/usd?parammode=2 `;
    const urlEUR = `https://www.nbrb.by/api/exrates/rates/eur?parammode=2 `;
    const url = `https://www.nbrb.by/api/exrates/rates/${cur}?parammode=2 `;

    const euroRate = async () => {
        try {
            const data = await request(urlEUR, 'GET');
            //setExchangeRate((exchangeRate) => ({ ...exchangeRate, eur: parseFloat(data.Cur_OfficialRate.toFixed(2)) }));
            return parseFloat(data.Cur_OfficialRate.toFixed(4));
            //setExchangeRate(...exchangeRate, setExchangeRate((exchangeRate.eur = data.Cur_OfficialRate.toFixed(2))));
        } catch (e) {}
    };
    const usdRate = async () => {
        try {
            const data = await request(urlUSD, 'GET');
            //setExchangeRate((exchangeRate) => ({ ...exchangeRate, usd: parseFloat(data.Cur_OfficialRate.toFixed(2)) }));
            // setExchangeRate(...exchangeRate, setExchangeRate((exchangeRate.eur = data.Cur_OfficialRate.toFixed(2))));
            return parseFloat(data.Cur_OfficialRate.toFixed(4));
        } catch (e) {}
    };
    const currentRate = async () => {
        try {
            const data = await request(url, 'GET');

            // euroRate();
            // usdRate();
            console.log(data);
            return parseFloat((data.Cur_OfficialRate / data.Cur_Scale).toFixed(4));
        } catch (e) {}
    };

    const currencyHandler = async () => {
        Promise.all([euroRate(), usdRate(), currentRate()]).then((values) => {
            setExchangeRate((exchangeRate) => ({ ...exchangeRate, eur: values[0], usd: values[1], rate: values[2] }));
        });
    };

    console.log(exchangeRate);
    return (
        <div className='currency-wrapper'>
            <div className='currency-rate'>1€={(exchangeRate.eur / exchangeRate.rate).toFixed(2)}</div>
            <div className='currency-rate'>1$={(exchangeRate.usd / exchangeRate.rate).toFixed(2)}</div>
            <div className='currency-rate'>1BYN={(1 / exchangeRate.rate).toFixed(2)}</div>
            <button className='wether-button' onClick={currencyHandler}>
                get
            </button>
        </div>
    );
}
