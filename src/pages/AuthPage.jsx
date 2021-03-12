import React, { useState, useEffect, useContext } from 'react';
import './pages.scss';
import { useHttp } from './../hooks/httpHook';
//import { useMessage } from './../hooks/messageHook';
import { AuthContext } from '../context/AuthContext';
import { useLanguage } from './../context/LanguageContext';

export const AuthPage = () => {
    const [sign, setSign] = useState(false);
    const [message, setMessage] = useState();
    //const message = useMessage(); //поменять содержимое хука
    const auth = useContext(AuthContext);
    const { loading, request, error, clearError } = useHttp();
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });
    const lang = useLanguage().language;

    useEffect(() => {
        //разобраться с отображением ошибки
        setMessage(error);
        setTimeout(() => clearError(), 5000);
    }, [error, message, clearError]);

    const registerHandler = async () => {
        try {
            const data = await request('http://localhost:4000/api/auth/register', 'POST', { ...form });

            setMessage(data.message);
        } catch (e) {
            console.log('error');
        }
    };

    const loginHandler = async () => {
        try {
            const data = await request('http://localhost:4000/api/auth/login', 'POST', { ...form });
            auth.login(data.name, data.token, data.userId);
        } catch (e) {
            console.log('error');
        }
    };

    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    console.log(sign);
    if (!sign) {
        return (
            <div className='auth-wrapper wrapper'>
                <div className='auth-card card'>
                    <span className='auth-card-title'>Auth {lang}</span>
                    <input
                        className='auth-card-email auth-input'
                        autoComplete='off'
                        placeholder='email'
                        type='email'
                        name='email'
                        value={form.email}
                        required
                        onChange={changeHandler}
                    />
                    <input
                        className='auth-card-password auth-input'
                        autoComplete='off'
                        placeholder='password'
                        type='password'
                        name='password'
                        value={form.password}
                        required
                        onChange={changeHandler}
                    />
                    <span className='auth-password-length'>Мин длинна 6 символов</span>
                    <div className='auth-buttons-wrapper'>
                        <button className='auth-button login' disabled={loading} onClick={loginHandler}>
                            Login
                        </button>
                        <button className='auth-button signup' onClick={() => setSign((prevState) => !prevState)}>
                            SignUp
                        </button>
                    </div>
                    <span className='auth-message'>1{message}</span>
                    <span className='auth-without-reg'>Продолжить без регистрации</span>
                </div>
            </div>
        );
    }
    return (
        <div className='auth-wrapper wrapper'>
            <div className='auth-card card'>
                <span className='auth-card-title'>Auth</span>
                <input
                    className='auth-card-name auth-input'
                    autoComplete='off'
                    placeholder='Name'
                    type='text'
                    name='name'
                    value={form.name}
                    required
                    onChange={changeHandler}
                />
                <input
                    className='auth-card-email auth-input'
                    autoComplete='off'
                    placeholder='email'
                    type='email'
                    name='email'
                    value={form.email}
                    required
                    onChange={changeHandler}
                />
                <input
                    className='auth-card-password auth-input'
                    autoComplete='off'
                    placeholder='password'
                    type='password'
                    name='password'
                    value={form.password}
                    required
                    onChange={changeHandler}
                />
                <span className='auth-password-length'>Мин длинна 6 символов</span>
                <div className='auth-buttons-wrapper'>
                    <button className='auth-button login' onClick={registerHandler} disabled={loading}>
                        Signup
                    </button>
                    <button className='auth-button cancel' onClick={() => setSign((prevState) => !prevState)}>
                        Cansel
                    </button>
                </div>
                <span className='auth-message'>{message}</span>
            </div>
        </div>
    );
};
