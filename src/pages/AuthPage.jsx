import React, { useState, useEffect, useContext } from 'react';
import './pages.scss';
import { useHttp } from './../hooks/httpHook';
import { AuthContext } from '../context/AuthContext';

export const AuthPage = () => {
    const [sign, setSign] = useState(false);
    const [message, setMessage] = useState();
    const auth = useContext(AuthContext);
    const { loading, request, error, clearError } = useHttp();
    const [photo, setPhoto] = useState(null);
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        image: '',
    });

    const url = 'https://nimlu-bot-travel-app.herokuapp.com';

    useEffect(() => {
        setMessage(error);
    }, [error]);

    const registerHandler = async () => {
        try {
            const image = await uploadHandler();
            if (image === 'error') {
                setMessage('image upload error');
                return;
            }
            const data = await request(`${url}/api/auth/register`, 'POST', {
                ...form,
                image: image || '',
            });
            setSign((prevState) => !prevState);
            setMessage(data.message);
        } catch (e) {
            console.log('error');
        }
    };
    const uploadHandler = async () => {
        try {
            if (photo) {
                const formData = new FormData();
                formData.append('file', photo);
                formData.append('upload_preset', 'tsb1hppc');
                const options = {
                    method: 'POST',
                    body: formData,
                };
                const data = await fetch('https://api.Cloudinary.com/v1_1/nimlu/image/upload', options).then((res) =>
                    res.json(),
                );
                setForm({ ...form, image: data.secure_url });
                return data.secure_url;
            }
            return null;
        } catch (e) {
            return 'error';
        }
    };

    const onPhotoSelect = (event) => {
        if (event.target.files.length) {
            setPhoto(event.target.files[0]);
        }
    };

    const loginHandler = async () => {
        try {
            const data = await request(`${url}/api/auth/login`, 'POST', { ...form });
            auth.login(data.name, data.token, data.userId, data.image);
        } catch (e) {
            console.log('error');
        }
    };
    const wthoutRegHandler = () => {
        auth.withoutLogin(true);
    };

    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };
    const cancelHandler = () => {
        setSign((prevState) => !prevState);
        clearError();
    };

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

                    <span className='auth-password-length'>Min is 6 characters long</span>
                    <div className='auth-buttons-wrapper'>
                        <button className='auth-button login' disabled={loading} onClick={loginHandler}>
                            Login
                        </button>
                        <button className='auth-button signup' onClick={() => setSign((prevState) => !prevState)}>
                            SignUp
                        </button>
                    </div>
                    <span className='auth-message'>{message}</span>
                    <span className='auth-without-reg' onClick={wthoutRegHandler}>
                        Continue without registration
                    </span>
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
                <span className='auth-password-length'>Min is 6 characters long</span>
                <div className='auth-file-wrapper'>
                    <div className='auth-file-placeholder'>{!photo ? `pleace select photo` : `${photo.name}`}</div>
                    <input className='auth-file' type='file' accept='image/*' onChange={onPhotoSelect} />
                </div>
                <div className='auth-buttons-wrapper'>
                    <button className='auth-button login' onClick={registerHandler} disabled={loading}>
                        Signup
                    </button>
                    <button className='auth-button cancel' onClick={cancelHandler}>
                        Cancel
                    </button>
                </div>
                <span className='auth-message'>{message}</span>
            </div>
        </div>
    );
};
