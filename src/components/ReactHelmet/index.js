import React from 'react'
import { Helmet } from 'react-helmet'

export const ReactHelmet = ({ children, title }) => {
    return (
        <>
            <Helmet>
                <title>{title} | NewsTimes</title>
            </Helmet> 
            {children}
        </>
    )
}
