import axios from 'axios'
import { colors, randomColor } from './colors'

export const BASE_URL = process.env.REACT_APP_API

export const fetchBlogs = async () => {
    const { data: { blogs } } = await axios.get(`${BASE_URL}/api/blogs`)

    return blogs
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