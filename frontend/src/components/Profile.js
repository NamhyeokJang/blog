import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { FaTimes } from 'react-icons/fa'
import { logout } from '../actions'

import './Profile.css'

export default ({ _close }) => {
    const [deskOn, setDesk] = useState(false)
    const dispatch = useDispatch()

    const isWakeDesk = async () => {
        const { data: { alive } } = await axios.get(`${process.env.REACT_APP_API}/api/desk/ping`)
        setDesk(alive)
    }

    const wakeDesk = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/desk/wol`)
        alert(data.message)
        setTimeout(isWakeDesk, 10000)
    }

    useEffect(() => {
        isWakeDesk()
    }, [deskOn])

    return (
        <div className='profile'>
            <FaTimes className='profile__close' onClick={() => _close()} />
            <div className='profile__container'>
                <div className='profile__wol' onClick={wakeDesk}>
                    <i className="fas fa-desktop profile__wol-icon"
                        style={{ color: deskOn ? '#fdcb6e' : '#b2bec3', marginRight: '20px' }}>
                    </i>
                    <span className='profile__wol-text'>{deskOn ? 'On' : 'Off'}</span>
                </div>
                <h3
                    className='profile__menu'>
                    Blog Upload
                </h3>
                <h3
                    className='profile__logout'
                    onClick={() => dispatch(logout())}>
                    Logout</h3>
            </div>

        </div>
    )
}