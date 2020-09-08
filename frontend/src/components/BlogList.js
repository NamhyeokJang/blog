import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { fetchBlogs, Portal } from '../utils'
import Blog from './Blog'
import UploadBlog from './UploadBlog'

import './BlogList.css'

export default () => {
    const [blogs, setBlogs] = useState([])
    const [upload, setUpload] = useState(false)
    const isLog = useSelector(state => state.user.isLog)

    useEffect(() => {
        fetchBlogs().then(res => setBlogs(res))
    }, [])

    return (
        <>
            <div className='blog-list'>
                {isLog ?
                    <div className='blog-list__auth'>
                        <h2 className='blog-list__menu' onClick={() => setUpload(true)}>Upload</h2>
                    </div> : ''}
                <div className='blog-list__contents'>
                    {blogs.map((blog, index) => <Blog key={index} data={blog} />)}
                </div>
            </div>
            <Portal>
                {upload ? <UploadBlog _close={() => setUpload(false)} /> : ''}
            </Portal>
        </>
    )
}
