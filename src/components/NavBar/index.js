import React from 'react'
import './style.scss'
import { Link } from '@reach/router'

export const NavBar = ({ burger }) => {
    return (
        <nav className="nav">
                <ul className={`nav__ul 
                    ${burger ? '' : `active`}`}
                >
                    <Link to="/" ><li>World</li></Link>
                    <Link to="/colombia"><li>Colombia</li></Link>
                    <Link to="/tech"> <li>Tech</li></Link>
                    <Link to="/science"> <li>Science</li></Link>
                    <Link to="/bitcoin"> <li>Bitcoin</li></Link>
                    <Link to="/business"> <li>Business</li></Link>
                    <Link to="/polities"> <li>Polities</li></Link>
                </ul>
        </nav>
    )
}
