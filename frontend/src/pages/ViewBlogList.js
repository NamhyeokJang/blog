import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'
import { fetchBlogs } from '../utils'
import { BlogList, Pagination } from '../components'

import './ViewBlogList.css'

export default () => {
    const [blogs, setBlogs] = useState([])
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(1)

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchBlogs(page).then(data => {
            setBlogs(data.blogs)
            setCount(data.count)
        })
    }, [page])

    return (
        <>
            <Helmet>
                <title>CHROW :Blogs</title>
            </Helmet>
            <div id='list' className='view-blog container'>
                <div className='view-blog__contents'>
                    <BlogList blogs={blogs} />
                </div>
                <Pagination total={count} unit={9} currentPage={page} _handlePage={setPage} />
            </div>
        </>
    )
}