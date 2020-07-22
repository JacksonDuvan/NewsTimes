import { useReducer } from 'react'

const initialState = {
    newsData: [],
    colombia: [],
    loading: false,
    error: false,
    message: ''
}

function reducer(state, action){
    switch (action.type) {
        case 'newsData':
            return {
                ...state, 
                newsData: action.payload, 
                loading: false
            }
        case 'colombia':
            return {
                ...state, 
                colombia: action.payload,
                loading: false
            }
        case 'loading': 
            return {
                ...state, 
                loading: true
            }
        case 'error':
            return {
                ...state, 
                error: true,
                loading: false
            }
        case 'message':
            return {
                ...state, 
                message: action.payload
            }
        default:
            throw new Error()
    }
}

export const useReducerState = () => {
    
    const [ state, dispatch ] = useReducer(reducer, initialState)

    return { state, dispatch }
}