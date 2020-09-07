import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import cogoToast from 'cogo-toast';
import { IconContext } from 'react-icons'
import { FaTimes } from 'react-icons/fa'
import { sendMail } from '../utils'
import Button from './Button'
import './SendMail.css'

export default ({ _close }) => {
    const [isLoading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const device = useSelector(state => state.device)

    const handleSendMail = async () => {
        setLoading(true)
        const result = await sendMail(name, email, title, content)
        if (result === 'ok') {
            setLoading(false)
            cogoToast.success(<div><h3>메일을 전송했습니다.</h3></div>)
        }
        _close()
    }

    return (
        <IconContext.Provider value='#000'>
            <div className='send-mail'>
                <div className='send-mail__container'>
                    <div className='send-mail__close' onClick={() => _close()} >
                        <FaTimes />
                    </div>
                    <div className='send-mail__form-container'>
                        <h1>Contact</h1>
                        <div className='send-mail__userinfo'>
                            <input type='text'
                                className='send-mail__input send-mail__username'
                                placeholder='이름*'
                                onChange={e => setName(e.target.value)}
                            />
                            <input type='text'
                                className='send-mail__input send-mail__email'
                                placeholder='이메일주소*'
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <input type='text'
                            className='send-mail__input send-mail__title'
                            placeholder='제목*'
                            onChange={e => setTitle(e.target.value)}
                        />
                        <textarea
                            className='send-mail__textarea'
                            placeholder='내용을 입력해주세요'
                            onChange={e => setContent(e.target.value)}
                        />
                        <Button buttonColor='btn--red' onClick={handleSendMail}>{isLoading ? '전송 중입니다...' : '메일 보내기'}</Button>
                    </div>
                    {device === 'mobile' ? '' :
                        <div className='send-mail__cover-wrapper'>
                            <img
                                className='send-mail__cover'
                                src='/image/logo_name.png'
                                alt='logo' />
                        </div>
                    }
                </div>
            </div>
        </IconContext.Provider>
    )
}
