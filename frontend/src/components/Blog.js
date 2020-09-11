import React from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../utils'
import Tag from './Tag'

import './Blog.css'

const OUTLINE = ['blog--outline', 'blog--shadow']

export default ({ data: { title, filename, cover, description, updatedAt, tag }, blogOutline }) => {
    const date = new Date(updatedAt).toISOString().substring(0, 10)
    const tags = tag ? tag : []
    const checkOutline = OUTLINE.includes(blogOutline) ? blogOutline : 'blog--shadow'
    return (
        <Link to={`/blog/${filename}`}>
            <div className={`blog ${checkOutline} `}>
                <div className='blog__cover-wrapper'>
                    <img className='blog__cover' src={`${BASE_URL}/api/images/${cover}`} alt='cover' />
                </div>
                <div className='blog__info-wrapper'>
                    <div className='blog__info'>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                    <div className='blog__tag-wrapper'>
                        {tags.map((tag, index) =>
                            <Tag key={index}>{tag}</Tag>)
                        }
                    </div>
                    <p className='blog__date'>작성일: {date}</p>
                </div>
            </div>
        </Link>
    )
}
