import axios from 'axios'
import qs from 'query-string'
import { colors, randomColor } from './colors'

export const BASE_URL = process.env.REACT_APP_API

export const fetchBlogs = async (page, limit) => {
    let query = {
        page: page ? page : null,
        limit: limit ? limit : null
    }

    const { data: { blogs: { rows, count } } } = await axios.get(`${BASE_URL}/api/blogs?${qs.stringify(query)}`)

    return {
        blogs: rows,
        count: count
    }
}

export const fetchMd = async (filename) => {
    const { data: { md } } = await axios.get(`${BASE_URL}/api/blogs/md/${filename}`)

    return md
}

export const sendMail = async (name, email, title, content) => {
    const { data: { result } } = await axios.post(`${BASE_URL}/api/mail`, {
        name,
        email,
        title,
        content
    })
    return result
}

export {
    colors,
    randomColor
}

export { default as Portal } from './Portal'