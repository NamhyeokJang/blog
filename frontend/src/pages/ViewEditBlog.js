import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL, fetchBlogs, Portal } from '../utils'
import { UploadBlog } from '../components'
import './ViewEditBlog.css'

export default () => {
    const [blogs, setBlog] = useState([])
    const [count, setCount] = useState(0)
    const [upload, setUpload] = useState(false)
    const [page, setPage] = useState(1)

    useEffect(() => {
        fetchBlogs(page).then(data => {
            setBlog(data.blogs)
            setCount(data.count)
        })
    }, [page])

    const deleteBlog = async (id) => {
        await axios.delete(`${BASE_URL}/api/blogs/${id}`)
        const updatedBlog = blogs.filter((blog) => blog.id !== id)

        setBlog(updatedBlog)
    }
    return (
        <>
            <Helmet>
                <title>Auth: Edit Blog</title>
            </Helmet>
            <div className='view-edit-blog container'>
                <div className='view-edit-blog__menu-container'>
                    <h1 className='view-edit-blog__menu' onClick={() => setUpload(true)}>Upload</h1>
                </div>
                <div className='view-edit-blog__contents'>
                    {blogs.map((blog, index) => <Blog key={index} data={blog} _delete={deleteBlog} />)}
                </div>
            </div>
            <Portal>
                {upload ? <UploadBlog
                    _update={updatedBlog => setBlog([...blogs, updatedBlog])}
                    _close={() => setUpload(false)} /> : ''}
            </Portal>
        </>
    )
}


const Blog = ({ data, _delete }) => {
    return (
        <div className='edit-blog'>
            <Link to={`/blog/${data.filename}`}>
                <img className='edit-blog__cover' src={`${BASE_URL}/api/images/${data.cover}`} alt='cover' />
            </Link>
            <div className='edit-blog__info-wrapper'>
                <Link to={`/blog/${data.filename}`}>
                    <p className='edit-blog__title'>title: {data.title}</p>
                    <p className='edit-blog__desc'>desc: {data.description}</p>
                    <p className='edit-blog__md'>md: {data.filename}</p>
                    <p className='edit-blog__updatedAt'>updatedAt: {data.updatedAt}</p>
                </Link>
                <p className='edit-blog__delete' onClick={() => _delete(data.id)}>Delete</p>
            </div>
        </div>
    )
}