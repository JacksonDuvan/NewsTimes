import React from 'react'
import Image from '../../../images/react.png'
import './style.scss'


export const News = ({ title, description, publishedAt, url, urlToImage }) => {
    return (
        <div className="news">
            <a href={url} className="news__ancla" target="_blank">
            <img className="news__img" src={urlToImage || Image} alt={title} loading="lazy"/>
            <h5>{title}</h5>
            <p>{description}</p>
            <span>{publishedAt.slice(0, -10)}</span>
            </a>
        </div>
    )
}
