import { combineReducers } from 'redux'

import { plantReducer } from './plantReducer'

export const rootReducer = combineReducers({
    plants: plantReducer
})