import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { FaTimes, FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { Portal } from '../utils'
import Button from './Button'
import LoginForm from './LoginForm'
import Profile from './Profile'
import './Header.css'

export default () => {
    const [menu, setMenu] = useState(false)
    const [login, setLogin] = useState(false)
    const isLog = useSelector(state => state.user.isLog)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='header'>
                    <div className='header__container container'>
                        <Link to='/' className='header__logo-wrapper'>
                            <img className='header__logo'
                                src='/image/logo.png'
                                alt='logo' />
                            chrow
                        </Link>
                        <div className='header__menu-controll'
                            onClick={() => setMenu(!menu)}>
                            {menu ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={menu ? 'header__menu active' : 'header__menu'}>
                            <li className='header__menu-item'>
                                <Link to='/blog' className='header__link' onClick={() => setMenu(!menu)}>
                                    Blog
                                </Link>
                            </li>
                            <li className='header__menu-item'>
                                {isLog ?
                                    <div className='header__btn-wrapper' onClick={() => setLogin(true)} >
                                        <Button
                                            buttonStyle='btn--outline'>
                                            Host
                                        </Button>
                                    </div>
                                    :
                                    <div className='header__btn-wrapper'>
                                        <Button
                                            buttonStyle='btn--outline'
                                            onClick={() => setLogin(true)}>
                                            Login
                                        </Button>
                                    </div>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
            <Portal>
                {(!isLog && login) ? <LoginForm _close={() => setLogin(false)} /> : ''}
                {(isLog && login) ? <Profile _close={() => setLogin(false)} /> : ''}
            </Portal>
        </>
    )
}