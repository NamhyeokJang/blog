import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BlogList, Button } from '.'
import { fetchBlogs } from '../utils'

import './TopSection.css'

export default () => {
    const [blogs, setBlog] = useState([])

    useEffect(() => {
        fetchBlogs(null, 3).then(res => setBlog(res.blogs))
    }, [])
    return (
        <div className='top-section'>
            <div className='top-section__cover'>
                <h1 className='top-section__cover-title'>Welcome Chrow's Blog</h1>
            </div>
            <div className='top-section__blogs container'>
                <h1 className='top-section__blogs-title'>최근 글</h1>
                <div className='top-section__blogs-contents'>
                    <BlogList
                        blogs={blogs}
                        blogOutline={'blog--outline'} />
                </div>
                <Link to='/blog'>
                    <Button buttonSize='btn--wide'>더보기</Button>
                </Link>
            </div>
        </div>
    )
}
