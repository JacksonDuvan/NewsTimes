import React from 'react'
import './styles.scss'
import Logo from '../../../images/NewsTimesWhite.png'
import { Link } from '@reach/router'

export const Footer = () => {
    return (
        <div className="footer">
            <Link to="/">
                <img src={Logo} className="footer__img" alt="Logo"/>
            </Link>
        </div>
    )
}
