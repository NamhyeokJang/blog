import React from 'react';
import { Helmet } from 'react-helmet'
import { BlogList } from '../components'

import './ViewBlogList.css'

export default () => {
    return (
        <>
            <Helmet>
                <title>CHROW :Blogs</title>
            </Helmet>
            <div className='view-blog container'>
                <BlogList />
            </div>
        </>
    )
}