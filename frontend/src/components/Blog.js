import React from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../utils'
import Tag from './Tag'

import './Blog.css'

export default ({ data: { title, filename, cover, updatedAt, tag } }) => {
    const date = new Date(updatedAt).toISOString().substring(0, 10)
    return (
        <Link to={`/blog/${filename}`}>
            <div className='blog'>
                <div className='blog__cover-wrapper'>
                    <img className='blog__cover' src={`${BASE_URL}/api/images/${cover}`} alt='cover' />
                </div>
                <div>
                    <div className='blog__info'>
                        <h1>{title}</h1>
                    </div>
                    <div className='blog__tag-wrapper'>
                        {tag.map((tag, index) =>
                            <Tag key={index}>{tag}</Tag>)
                        }
                    </div>
                    <p className='blog__date'>작성일: {date}</p>
                </div>
            </div>
        </Link>
    )
}
