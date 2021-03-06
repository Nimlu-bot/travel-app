import React, { useState } from 'react';
import './pages.scss';

export const AuthPage = () => {
    const [sign, setSign] = useState(false);
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
                        required
                    />
                    <input
                        className='auth-card-password auth-input'
                        autoComplete='off'
                        placeholder='password'
                        type='password'
                        required
                    />
                    <span className='auth-password-length'>Мин длинна 6 символов</span>
                    <div className='auth-buttons-wrapper'>
                        <button className='auth-button login'>Login</button>
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
                    className='auth-card-email auth-input'
                    autoComplete='off'
                    placeholder='email'
                    type='email'
                    name='email'
                    required
                />
                <input
                    className='auth-card-password auth-input'
                    autoComplete='off'
                    placeholder='password'
                    type='password'
                    required
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
                    <button className='auth-button login'>Signup</button>
                    <button className='auth-button cancel' onClick={() => setSign((prevState) => !prevState)}>
                        Cansel
                    </button>
                </div>
            </div>
        </div>
    );
};
