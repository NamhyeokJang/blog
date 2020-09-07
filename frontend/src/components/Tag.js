import React from 'react'
import { randomColor } from '../utils'

import './Tag.css'

export default ({ children }) => {
    return (
        <div className='tag__container' style={{ background: randomColor() }}>{children}</div>
    )
}
