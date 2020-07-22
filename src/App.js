import React from 'react'
import { Router } from '@reach/router'
import { World } from './pages/World'
import { Colombia } from './pages/Colombia'
import { Tech } from './pages/Tech'
import { Science } from './pages/Science'
import { Bitcoin } from './pages/Bitcoin'
import { Business } from './pages/Business'
import { Polities } from './pages/Polities'
import { Footer } from './components/Footer'

export const App = () => {
    return (
     <>
        <Router>
            <World path='/'/>
            <Colombia path='/colombia'/>
            <Tech path='/tech'/>
            <Science path='science'/>
            <Bitcoin path='bitcoin'/>
            <Business path='business'/>
            <Polities path='polities'/>
        </Router>
        <Footer/>
     </>
    )
}
