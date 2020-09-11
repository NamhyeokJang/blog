import React from 'react'

import './Pagination.css'

export default ({ total, unit, _handlePage, currentPage }) => {
    const count = Math.ceil(total / unit)

    return (
        <div className='pagination'>
            {new Array(count).fill(undefined).map((v, i) => {
                const index = i + 1
                return (
                    <span
                        key={i}
                        className={`pagination__index ${index === currentPage ? 'pagination--active' : ''}`}
                        onClick={() => _handlePage(index)}>
                        {index}
                    </span>
                )
            })}
        </div>
    )
}
