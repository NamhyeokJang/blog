import React, { useEffect, useRef, useState } from 'react'
import './Editor.css'
export default () => {
    const [edit, setEdit] = useState(``)
    const div = useRef()
    const handleDrag = e => {
        e.preventDefault()
        e.stopPropagation()
        console.log('handleDrag')
    }
    const handleDragIn = e => {
        e.preventDefault()
        e.stopPropagation()
        console.log('handleDragIn')
    }
    const handleDragOut = e => {
        e.preventDefault()
        e.stopPropagation()
        console.log('handleDragOut')
    }
    const handleDrop = e => {
        e.preventDefault()
        e.stopPropagation()
        console.log('handleDrop')
        console.log(e.dataTransfer.files)
    }
    const handleKey = e => {
        const key = e.charCode
        if (key === 13) {
            console.log(edit)
        }
    }
    return (
        <>
            <div className='editor' contentEditable={true} ref={div}
                suppressContentEditableWarning={true}
                onDrag={handleDrag}
                onDragLeave={handleDragOut}
                onDragEnter={handleDragIn}
                onDrop={handleDrop}
            // onKeyPress={handleKey}
            >
            </div>
            <button onClick={() => console.log(div.current.innerHTML)}>click</button>
        </>
    )
}
