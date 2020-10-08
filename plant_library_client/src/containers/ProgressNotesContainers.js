import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNote } from '../actions/progressNotesActions'
import ProgressForm from '../components/progressNotes/ProgressForm'

class ProgressNotesContainer extends Component{
    

    render() {
        return (
            <>
                <ProgressForm addNote={this.props.addNote} plantId={this.props.plant.id}/>
            </>
        )
    }
}
const mapStateToProps = ({progress_notes}) => {
    return {progress_notes}
}  
  
  export default connect(mapStateToProps, { addNote })(ProgressNotesContainer)
  