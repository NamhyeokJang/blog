import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { RiKakaoTalkFill } from 'react-icons/ri'
import { Portal } from '../utils'
import SendMail from './SendMail'

import './Footer.css'

export default () => {
    const [email, setEmail] = useState(false)
    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className='footer'>
                <div className='footer__container' >
                    <div className='footer__icon-wrapper'>
                        <FaGithub className='footer__icon'
                            onClick={() => window.open('https://github.com/NamhyeokJang')} />
                        <RiKakaoTalkFill className='footer__icon' />
                        <AiOutlineMail className='footer__icon' onClick={() => setEmail(true)} />
                    </div>
                    <p className='footer__message' >Welcome </p>
                </div>
            </div>
            <Portal>
                {email ? <SendMail _close={() => setEmail(false)} /> : ''}
            </Portal>
        </IconContext.Provider >
    )
}