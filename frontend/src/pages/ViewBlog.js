import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism"
import { fetchMd } from '../utils'

import './ViewBlog.css'
import '../styles/MD.css'

export default ({ match: { params: { filename } } }) => {
    const [md, setMd] = useState('')
    const [title, setTitle] = useState('')


    useEffect(() => {
        window.scrollTo(0, 0);
        const header = document.getElementsByTagName('h1')
        fetchMd(filename).then(res => {
            setMd(res)
            setTitle(header[0].innerHTML)
        })
    }, [filename])
    return (
        <>
            <Helmet>
                <title>{`CHROW : ${title}`}</title>
            </Helmet>
            <div className='view-blog container'>
                <ReactMarkdown
                    className='view-blog__md'
                    source={md}
                    renderers={{ code: CodeBlock }} />
            </div>
        </>
    )
}

const CodeBlock = ({ language, value }) => {
    return (
        <SyntaxHighlighter language={language} style={tomorrow}>
            {value}
        </SyntaxHighlighter>
    )
}