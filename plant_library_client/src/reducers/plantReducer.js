export const plantReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_PLANTS':
            return action.payload 
        case 'ADD_PLANT':
            return [...state, action.payload]
        default:
            return state
    }
}