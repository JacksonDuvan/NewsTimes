import React from 'react'
import './styles.scss'

export const NotFound = ({ message }) => {
    return (
        <div className="not-found">
            <h1>😱Lo sentimos algo fallo❌</h1>
            <h2>Error: {message}</h2>
        </div>
    )
}
