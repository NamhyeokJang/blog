import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import axios from 'axios'
import Button from './Button'

import './UploadBlog.css'

export default ({ _close, _update }) => {
    const [title, setTitle] = useState('')
    const [md, setMd] = useState('')
    const [description, setDesc] = useState('')
    const [cover, setCover] = useState('')
    const [tagInput, setInput] = useState('')
    const [tags, setTag] = useState([])

    const handleSubmit = async () => {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('md', md)
        formData.append('cover', cover)
        formData.append('tags', tags)
        axios.post(`${process.env.REACT_APP_API}/api/blogs`, formData).then(res => {
            _update(res.data.blog)
        })
        _close()
    }

    const handleTag = e => {
        setInput(e.target.value)
        if (e.key === 'Enter') {
            setTag([...tags, e.target.value])
            setInput('')
        }
    }

    const handleUploadMarkdown = e => {
        setMd(e.target.files[0])
        setTitle(e.target.files[0].name.split('.')[0])
        const reader = new FileReader()
        reader.onload = () => setDesc(reader.result.substring(0, 300))
        reader.readAsText(e.target.files[0])
    }

    return (
        <div className='upload-blog'>
            <div className='upload-blog__form'>
                <div className='upload-blog__close' onClick={() => _close()} >
                    <FaTimes />
                </div>
                <input
                    className='upload-blog__text'
                    type='text' placeholder='title'
                    value={title}
                    onChange={e => setTitle(e.target.value)} />
                <input
                    className='upload-blog__text'
                    type='text' placeholder='tag'
                    value={tagInput}
                    onChange={handleTag}
                    onKeyPress={handleTag} />
                <div className='upload-blog__tag-wrapper'>
                    {tags.map((v, i) =>
                        <p key={i} className='upload-blog__tag'>{v}</p>)}
                </div>
                <div className='upload-blog__upload-wrapper'>
                    <label className='upload-blog__file-upload' htmlFor='blog'>마크다운</label>
                    <label className='upload-blog__file-upload' htmlFor='cover'>이미지</label>
                </div>
                <p>md: {md.name}</p>
                <p>cover: {cover.name}</p>
                <input type='file' id='blog'
                    onChange={handleUploadMarkdown} />
                <input type='file' id='cover'
                    onChange={e => setCover(e.target.files[0])} />
                <textarea className='upload-blog__textarea'
                    value={description}
                    onChange={e => setDesc(e.target.value)} />
                <Button onClick={handleSubmit} buttonColor='btn--red'>업로드</Button>
            </div>
        </div>
    )
}
