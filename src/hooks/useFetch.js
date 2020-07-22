import { useEffect } from 'react'
import { useReducerState } from './useReducerState'

const apiKey = '918c5c8820f243b4adbffc26c8786848'

export const useFetch = (path) => {
    const {state, dispatch} = useReducerState()

    const { newsData, colombia, loading, error, message } = state

    const getData = async () => {
        dispatch({type: 'loading'})
        try {
            let [ responseWorld, responseColombia ] = await Promise.all([
                    fetch(`https://newsapi.org/v2/everything?q=${path || 'world'}&apiKey=${apiKey}`),
                    fetch(`https://newsapi.org/v2/top-headlines?country=co&apiKey=${apiKey}`)
            ])
    
            const data = await responseWorld.json()
            const dataColombia = await responseColombia.json()
            
            dispatch({type: 'newsData', payload: data.articles})
            dispatch({type: 'colombia', payload: dataColombia.articles })
        } catch (err) {
            dispatch({type: 'error'})
            dispatch({type: 'message', payload: err.message})
        }
    }

    useEffect(() => {
        getData()
    }, [])
    
    return {newsData, colombia, loading, error, message } 
}
