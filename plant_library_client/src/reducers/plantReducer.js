export const plantReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_PLANTS':
            return action.payload 
        case 'ADD_PLANT':
            return [...state, action.payload]
        case 'DELETE_PLANT':
            return {
                ...state,
                plant: state.plants.find( plant => plant.id !== action.payload.id)
            }

        case 'ADD_NOTE':
            
            const p = state.find( plant => plant.id === action.payload.plant_id)
            //console.log(...p.progress_notes)
            // maintain ccurrent state
            // return a new state array, with added notess to plant object

            const plants = state.map(plant => plant !== p ? plant : {...p, progress_notes: [...p.progress_notes, action.payload]})
            console.log(plants)
            return plants
        default:
            return state
    }
}