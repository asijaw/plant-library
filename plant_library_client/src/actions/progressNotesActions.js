export const addNote = (note) => {
    
    return (dispatch) => {
        fetch (`http://localhost:3000/progress_notes`, {
            method: "POST",
            body: JSON.stringify(note),
            headers: {"Content-Type" : "application/json"}
        })
        .then(resp => resp.json())
        .then(note => dispatch({ type: 'ADD_NOTE', payload: note }))
    }
}