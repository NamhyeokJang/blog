import React from 'react'
import { useSelector } from 'react-redux'
import './Button.css'


const STYLE = ['btn--outline', 'btn--link']
const SIZE = ['btn--medium', 'btn--large', 'btn--wide']
const COLOR = ['btn--primary', 'btn--blue', 'btn--red', 'btn--yellow']

export default ({ children, type, onClick, style, className, buttonStyle, buttonSize, buttonColor }) => {
    const device = useSelector(state => state.device)
    const checkStyle = STYLE.includes(buttonStyle) ? buttonStyle : null
    const checkSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0]
    const checkColor = COLOR.includes(buttonColor) ? buttonColor : null
    const checkdevice = device === 'web' ? null : 'btn--mobile'
    return (
        <button
            className={`btn ${checkStyle} ${checkSize} ${checkColor} ${checkdevice} ${className}`}
            type={type}
            style={style}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
