import React from 'react'
import { News } from '../components/News'
import '../GlobalStyles/layout.scss'
import { Header } from '../components/Header'
import { useFetch } from '../hooks/useFetch'
import { Loading } from '../components/Loading'
import { ReactHelmet } from '../components/ReactHelmet'
import { NotFound } from '../components/NotFound'

export const Bitcoin = ({ path }) => {
    const { newsData, loading, error, message } = useFetch(path)
    return(
        <ReactHelmet title="Bitcoin">
            <Header/>
            <div className="container">
                {error && <NotFound message={message}/>}
                {loading && <Loading/>}
                <h1 className="h1">Bitcoin</h1>
                <div className="layout">
                    {newsData.map((item, i) => <News {...item} key={i}/>)}
                </div>
            </div>
        </ReactHelmet>
    )
}