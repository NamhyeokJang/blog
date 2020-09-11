import React from 'react'
import Blog from './Blog'

import './BlogList.css'

export default ({ blogs, blogOutline }) => {
    return (
        <>
            <div className='blog-list'>
                <div className='blog-list__contents'>
                    {blogs.map((blog, index) => <Blog key={index} blogOutline={blogOutline} data={blog} />)}
                </div>
            </div>
        </>
    )
}
