import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'

import '../styles/ViewWol.css'

export default () => {
    const [deskOn, setDesk] = useState(false)
    const isLog = useSelector((state) => state.user.isLog)

    const isWakeDesk = async () => {
        const { data: { alive } } = await axios.get(`${process.env.REACT_APP_API}/api/desk/ping`)
        setDesk(alive)
    }

    useEffect(() => {
        isWakeDesk()
    }, [deskOn])

    const wakeDesk = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/desk/wol`)
        alert(data.message)
        setTimeout(isWakeDesk, 10000)
    }
    return (
        <div className='wol__container'>
            {!isLog && <Redirect to="/" />}
            <h1>Wol Page</h1>
            <div className='wol__deskInfo'>
                <i className="fas fa-desktop wol__icon"
                    style={{ color: deskOn ? '#fdcb6e' : '#b2bec3' }}
                    onClick={wakeDesk}>
                </i>
                <span>{deskOn ? 'On' : 'Off'}</span>
            </div>
        </div>
    )
}