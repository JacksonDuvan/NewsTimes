import React, { useState } from 'react'
import Logo from '../../../images/NewsTimesBlack.png'
import './styles.scss'
import { NavBar } from '../NavBar'
import { Link } from '@reach/router'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

export const Header = () => {
    const [burger, setBurger] = useState(true)
    return(
        <div className="header">
            <div className="header__burger" onClick={() => setBurger(!burger)}>
                {
                    burger 
                        ?  <GiHamburgerMenu color="white" size="20" />
                        : <AiOutlineClose color="white" size="20"/>
                }
            </div>
            <div className="header__container-img">
                <Link to="/"><img className="header__img" src={Logo} alt="Logo"/></Link>
            </div>
            <NavBar burger={burger}/>
        </div>
    )
}