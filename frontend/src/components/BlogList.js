import React, { useEffect, useState } from 'react'
import { fetchBlogs } from '../utils'
import Blog from './Blog'

import './BlogList.css'

export default () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetchBlogs().then(res => setBlogs(res))
    }, [])

    return (
        <div className='blog-list__container'>
            {blogs.map((blog, index) => <Blog key={index} data={blog} />)}
        </div>
    )
}
