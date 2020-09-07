import React from 'react';
import '../styles/Menu.css'

export default ({ _close }) => {
    return (
        <div className='menu__container'>
            <i className="fas fa-times menu__close"
                onClick={() => _close(false)}>
            </i>
        </div>
    )
}