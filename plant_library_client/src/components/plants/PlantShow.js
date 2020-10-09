import React, { Component }from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import {deletePlant} from '../../actions/plantsActions'
import moment from 'moment'
import ProgressNotesContainers from '../../containers/ProgressNotesContainers'


class PlantShow extends Component {
    
    handleOnClick(id) {
        this.props.deletePlant(id);
    }
    render() {
        const {plants , match} = this.props
        if (plants.length === 0) return null;
        const plant = plants.find((plant) => plant.id === parseInt(match.params.plantId));
    
        return (
            <Card style={cardStyle}>
                <Card.Body>
                    <Card.Img src={plant.image} style={imageStyle} alt={plant.name}/>
                    <Card.Title><h1>{plant.name}</h1></Card.Title>
                    <Card.Body>
                        <strong>Benefits: </strong> {plant.benefit} <br/>
                        <strong>Care Instructions: </strong>{plant.care} 
                        <br/>
                        <strong>Progress Notes:</strong><br/>
                        {plant.progress_notes ? 
                            plant.progress_notes.map(note => <p key={note.id}><strong>{moment(note.created_at).format("MMM Do YYYY")}</strong> - {note.text}</p>) :
                            plant.progress_notes = []}
                        <br/>
                        <ProgressNotesContainers plant={plant}/>
                        <button onClick={() => this.handleOnClick(plant)}> Delete Plant</button>
                    </Card.Body>
                </Card.Body>
            </Card>
                
        )
    }
}

export default connect(null, {deletePlant})(PlantShow)

const cardStyle = {
    border: 'solid',
    marginBottom: 25,
    marginTop: 25,
    marginLeft: 25,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 25,
    paddingTop: 25,
    
    display: 'inline-block',
    textAlign: 'center'
}

const imageStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 200,
    height: 200,
    marginBottom: 10
}