import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { login } from '../actions'

import '../styles/ViewLogin.css'

export default () => {
    const [password, setPwd] = useState('')
    const dispatch = useDispatch()
    return (
        <div className='container'>
            <div className='login__container'>
                <input className='login__input'
                    type='password'
                    placeholder='HOST_KEY'
                    onChange={e => setPwd(e.target.value)} />
                <button className='login__button'
                    onClick={() => dispatch(login(password))}
                >로그인</button>
            </div>
        </div>
    )
}