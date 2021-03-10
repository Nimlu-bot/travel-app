import React, { useState, useEffect } from 'react';
import { useHttp } from './../hooks/httpHook';

export default function Currency(props) {
    //const [cur] = useState('gbp');
    // const curencies = ['usd', 'eur', 'czk', 'gbp', 'uah'];
    const [exchangeRate, setExchangeRate] = useState({
        rate: 1,
        usd: 1,
        eur: 1,
    });
    // console.log(props.currency);
    const { request } = useHttp();
    const urlUSD = `https://www.nbrb.by/api/exrates/rates/usd?parammode=2 `;
    const urlEUR = `https://www.nbrb.by/api/exrates/rates/eur?parammode=2 `;
    const url = `https://www.nbrb.by/api/exrates/rates/${props.currency}?parammode=2 `;

    const euroRate = async () => {
        try {
            const data = await request(urlEUR, 'GET');
            return parseFloat(data.Cur_OfficialRate.toFixed(4));
        } catch (e) {}
    };
    const usdRate = async () => {
        try {
            const data = await request(urlUSD, 'GET');
            return parseFloat(data.Cur_OfficialRate.toFixed(4));
        } catch (e) {}
    };
    const currentRate = async () => {
        try {
            const data = await request(url, 'GET');
            return parseFloat((data.Cur_OfficialRate / data.Cur_Scale).toFixed(4));
        } catch (e) {}
    };

    const currencyHandler = async () => {
        Promise.all([euroRate(), usdRate(), currentRate()]).then((values) => {
            setExchangeRate((exchangeRate) => ({ ...exchangeRate, eur: values[0], usd: values[1], rate: values[2] }));
        });
    };
    useEffect(() => {
        currencyHandler();
    }, []);

    return (
        <div className='currency-wrapper'>
            <div className='currency-rate'>1€={(exchangeRate.eur / exchangeRate.rate).toFixed(2)}</div>
            <div className='currency-rate'>1$={(exchangeRate.usd / exchangeRate.rate).toFixed(2)}</div>
            <div className='currency-rate'>1BYN={(1 / exchangeRate.rate).toFixed(2)}</div>
        </div>
    );
}
