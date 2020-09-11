import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
import { fetchBlogs, Portal } from '../utils'
import { BlogList, UploadBlog, Pagination } from '../components'

import './ViewBlogList.css'

export default () => {
    const [blogs, setBlogs] = useState([])
    const [count, setCount] = useState(0)
    const [upload, setUpload] = useState(false)
    const [page, setPage] = useState(1)
    const isLog = useSelector(state => state.user.isLog)

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
                {isLog ?
                    <div className='view-blog__auth'>
                        <h2 className='view-blog__menu' onClick={() => setUpload(true)}>Upload</h2>
                    </div> : ''}
                <div className='view-blog__contents'>
                    <BlogList blogs={blogs} />
                </div>
                <Pagination total={count} unit={9} currentPage={page} _handlePage={setPage} />
            </div>
            <Portal>
                {upload
                    ?
                    <UploadBlog
                        update={(newBlog) => setBlogs([...blogs, newBlog])} _close={() => setUpload(false)} /> : ''}
            </Portal>
        </>
    )
}