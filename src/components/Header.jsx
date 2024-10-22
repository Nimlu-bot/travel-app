import React, { useContext, useState } from 'react';
import Language from './Language';
import SearchField from './SearchField';
import { AuthContext } from './../context/AuthContext';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useLanguage } from './../context/LanguageContext';
import { useParams } from 'react-router-dom';

export default function Header() {
    const { id } = useParams();
    const auth = useContext(AuthContext);
    const history = useHistory();
    const logoutHandler = (e) => {
        e.preventDefault();
        auth.logout();
        history.push('/');
    };

    const name = auth.name || 'Аnonim';
    const lang = useLanguage().language;

    const logOutName = {
        en: 'Logout',
        ru: 'Выход',
        ua: 'Вихід',
    };
    const loginName = {
        en: 'Login',
        ru: 'Войти',
        ua: 'Увійти',
    };

    const avatar =
        auth.image || 'https://res.cloudinary.com/nimlu/image/upload/v1615815415/travel-app/avatar_nxcw4a.png';
    let [toggle, setToggle] = useState('');
    let [toggleHeader, setToggleHeader] = useState('');

    const burgerBtn = () => {
        setToggle(toggle === '' ? 'toggle' : '');
        setToggleHeader(toggleHeader === '' ? 'toggleHeader' : '');
    };

    return (
        <slot>
            <div className={'burger-btn ' + toggle} onClick={burgerBtn}>
                <span></span>
            </div>

            <div className={'header-wrapper ' + toggleHeader}>
                <div className='header-logo'>
                    <NavLink to='/'>
                        <svg
                            id='_x31_-outline-expand'
                            enableBackground='new 0 0 64 64'
                            height='512'
                            viewBox='0 0 64 64'
                            width='512'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path d='m63.317 16.523c-.869-2.348-3.465-3.754-5.928-3.129l-3.442-2.099c-1.3-.787-2.871-.941-4.309-.424l-12.592 4.582-10.34-14.611c-.26-.367-.737-.515-1.158-.362l-5.63 2.05c-.52.189-.787.762-.598 1.281l5.808 15.977-12.52 4.556-6.725-7.522c-.271-.304-.702-.414-1.087-.273l-3.759 1.368c-.52.188-.787.763-.598 1.281l5.471 15.034c.144.396.52.658.939.658h.013l21.19-.26c.112-.001.225-.022.33-.061l1.877-.685 5.473 15.036c.147.406.531.659.939.659.113 0 .229-.02.342-.061l5.639-2.053c.424-.154.692-.573.654-1.022l-1.395-16.797 18.42-6.708c1.967-.716 3.288-2.608 3.288-4.709.001-.568-.099-1.139-.302-1.706zm-41.776-12.455 3.974-1.447 9.584 13.54-8.092 2.944zm-16.146 22.901-2.735-7.514 2.184-.794 5.741 6.42zm31.875 20.328-6.841-18.794 9.106-3.314 1.716 20.66zm22.378-26.236-17.908 6.521-.321-3.863c-.025-.311-.194-.592-.457-.76s-.59-.202-.881-.098l-11.276 4.104c-.249.091-.452.277-.564.517-.112.241-.124.516-.033.765l1.368 3.758-1.718.627-20.311.25-1.466-4.033 44.238-16.097c.865-.312 1.811-.219 2.59.252l.958.584-2.936 1.069.684 1.88 4.438-1.615.677.413c.257.158.574.189.855.089 1.592-.567 3.303.294 3.853 1.783.121.34.183.684.183 1.024-.001 1.263-.794 2.4-1.973 2.83z' />
                            <path
                                d='m44.634 16.648h1.999v2h-1.999z'
                                transform='matrix(.94 -.342 .342 .94 -3.284 16.662)'
                            />
                            <path
                                d='m40.875 18.016h1.999v2h-1.999z'
                                transform='matrix(.94 -.342 .342 .94 -3.978 15.459)'
                            />
                            <path
                                d='m37.117 19.385h1.999v2h-1.999z'
                                transform='matrix(.94 -.342 .342 .94 -4.672 14.257)'
                            />
                            <path
                                d='m33.358 20.753h1.999v2h-1.999z'
                                transform='matrix(.94 -.342 .342 .94 -5.366 13.054)'
                            />
                            <path
                                d='m29.599 22.121h1.999v2h-1.999z'
                                transform='matrix(.94 -.342 .342 .94 -6.06 11.852)'
                            />
                            <path
                                d='m25.84 23.489h1.999v2h-1.999z'
                                transform='matrix(.94 -.342 .342 .94 -6.754 10.65)'
                            />
                            <path
                                d='m22.081 24.857h1.999v2h-1.999z'
                                transform='matrix(.94 -.342 .342 .94 -7.448 9.447)'
                            />
                            <path d='m18.323 26.225h2v2h-2z' transform='matrix(.94 -.342 .342 .94 -8.151 8.257)' />
                            <path d='m14.564 27.593h2v2h-2z' transform='matrix(.94 -.342 .342 .94 -8.846 7.054)' />
                            <path d='m19 44h6.184c.414 1.161 1.514 2 2.816 2 1.654 0 3-1.346 3-3s-1.346-3-3-3c-1.302 0-2.402.839-2.816 2h-6.184c-3.309 0-6 2.691-6 6s2.691 6 6 6h17v-2h-17c-2.206 0-4-1.794-4-4s1.794-4 4-4zm9-2c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1z' />
                            <path d='m38 52h2v2h-2z' />
                            <path d='m50.5 52h-8.5v2h8.5c1.379 0 2.5 1.122 2.5 2.5s-1.121 2.5-2.5 2.5h-31.5v2h31.5c2.481 0 4.5-2.019 4.5-4.5s-2.019-4.5-4.5-4.5z' />
                            <path d='m5 57c-1.654 0-3 1.346-3 3s1.346 3 3 3c1.302 0 2.402-.839 2.816-2h9.184v-2h-9.184c-.414-1.161-1.514-2-2.816-2zm0 4c-.552 0-1-.449-1-1s.448-1 1-1 1 .449 1 1-.448 1-1 1z' />
                        </svg>
                    </NavLink>
                    <Language />
                </div>

                <div className='header-user-wrapper'>
                    <div className='login-wrapper'>
                        <div className='header-user'>{name} </div>
                        <div className='header-image' style={{ backgroundImage: `url(${avatar})` }}></div>
                        <button className='header-logout' onClick={logoutHandler}>
                            {name !== 'Аnonim' ? <span>{logOutName[lang]}</span> : <span>{loginName[lang]}</span>}
                        </button>
                    </div>
                    {!id && <SearchField />}
                </div>
            </div>
        </slot>
    );
}
