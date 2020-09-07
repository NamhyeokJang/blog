import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FaTimes } from 'react-icons/fa'
import { login } from '../actions'
import Button from './Button'

import './LoginForm.css'

export default ({ _close }) => {
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(login(password))
        _close()
    }
    return (
        <div className='login-form'>
            <FaTimes className='login-form__close' onClick={() => _close()} />
            <h1>Host Key</h1>
            <input className='login-form__input'
                type='password'
                onChange={e => setPassword(e.target.value)} />
            <Button
                buttonColor='btn--red'
                buttonSize='btn--mobile'
                onClick={handleLogin}>Sign In</Button>
        </div>
    )
}