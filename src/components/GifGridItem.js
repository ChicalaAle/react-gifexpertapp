import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    return (
        <div className="gif-item animate__animated animate__backInLeft hover-effect">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
