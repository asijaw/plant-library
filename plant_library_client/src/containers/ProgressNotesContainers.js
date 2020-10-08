import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProgressForm from '../components/progressNotes/ProgressForm'

class ProgressNotesContainer extends Component{

    render() {
        return (
            <div>
                <ProgressForm addNote={this.props.addNote} plantId={this.props.plant.id}/>
            </div>
        )
    }
}
const mapStateToProps = ({progress_notes}) => {
    return {progress_notes}
}  

const mapDispatchToProps = dispatch => ({
    addNote: note => dispatch({type: 'ADD_PROGRESS', note}),
    deleteNote: id => dispatch({type: 'DELETE_PROGRESS', id})
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
  