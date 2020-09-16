import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { Editor } from '@toast-ui/react-editor';
import cogoToast from 'cogo-toast';
import { Button } from '../components'

import './ViewWriteBlog.css'


export default () => {
    const [title, setTitle] = useState('')
    const [inputTagText, setText] = useState('')
    const [tags, setTag] = useState([])
    const toast = useRef()
    const history = useHistory()

    const handleEnter = e => {
        if (e.charCode === 13) {
            setTag([...tags, inputTagText])
            setText('')
        }
    }

    const handleSubmit = async () => {
        await axios.post('http://localhost:3030/api/blogs/write', {
            title,
            tags,
            content: toast.current.getInstance().getMarkdown()
        })
            .then(res => {
                cogoToast.success('성공적으로 업로드했습니다.')
                history.push('/edit/blog')
            })
            .catch(res => {
                cogoToast.error('다시 시도해주세요')
            })
    }
    return (
        <div className='write-blog container'>
            <h2>Write Blog</h2>
            <input type='text'
                className='write-blog__title'
                onChange={e => setTitle(e.target.value)}
                value={title}
                placeholder='제목' />
            <input type='text'
                className='write-blog__input-tag'
                onChange={e => setText(e.target.value)}
                onKeyPress={handleEnter}
                value={inputTagText}
                placeholder='태그' />
            <div className='write-blog__tag-wrapper'>
                {tags.map((tag, index) => <p key={index} className='write-blog__tag'>{tag}</p>)}
            </div>
            <Editor
                previewStyle="vertical"
                height="80vh"
                initialEditType="markdown"
                initialValue=""
                ref={toast} />
            <Button className='write-blog__submit'
                buttonColor='btn--red'
                onClick={handleSubmit}>
                블로그 업로드</Button>
        </div >
    )
}
