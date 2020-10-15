export const addNote = (note) => {
    
    return (dispatch) => {
        console.log("c")
        fetch (`http://localhost:3000/progress_notes`, {
            method: "POST",
            body: JSON.stringify(note),
            headers: {"Content-Type" : "application/json"}
        })
        .then(resp => resp.json())
        .then(note =>

            {
                console.log("d")
                dispatch({ type: 'ADD_NOTE', payload: note })}) 
    }
}