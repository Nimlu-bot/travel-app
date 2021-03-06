import React, { useState, useEffect, useContext } from 'react';
import './pages.scss';
import { useHttp } from './../hooks/httpHook';
import { useMessage } from './../hooks/messageHook';
import { AuthContext } from '../context/AuthContext';

export const AuthPage = () => {
    const [sign, setSign] = useState(false);
    const message = useMessage(); //поменять содержимое хука
    const auth = useContext(AuthContext);
    const { loading, request, error, clearError } = useHttp();
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        //разобраться с отображением ошибки
        message(error);
        clearError();
    }, [error, message, clearError]);
    const registerHandler = async () => {
        try {
            const data = await request('http://localhost:4000/api/auth/register', 'POST', { ...form });

            message(data.message);
        } catch (e) {}
    };

    const loginHandler = async () => {
        try {
            const data = await request('http://localhost:4000/api/auth/login', 'POST', { ...form });
            auth.login(data.name, data.token, data.userId);
        } catch (e) {}
    };

    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    console.log(sign);
    if (!sign) {
        return (
            <div className='auth-wrapper wrapper'>
                <div className='auth-card card'>
                    <span className='auth-card-title'>Auth</span>
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
                <input
                    className='auth-card-password-confirm auth-input'
                    autoComplete='off'
                    placeholder='confirm'
                    type='password'
                    required
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
                <span className='auth-message'></span>
            </div>
        </div>
    );
};
