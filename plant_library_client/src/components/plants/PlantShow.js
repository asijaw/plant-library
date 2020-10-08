import React from 'react'
import { Card } from 'react-bootstrap'
import moment from 'moment'
import ProgressForm from '../progressNotes/ProgressForm'


const PlantShow = ( {plants , match} ) => {
    if (plants.length === 0) return null;
    const plant = plants.find((plant) => plant.id === parseInt(match.params.plantId));
    console.log(plant)
    
    return (
        <div>
            <Card style={cardStyle}>
                <Card.Body>
                    <Card.Img src={plant.image} style={imageStyle} alt={plant.name}/>
                    <Card.Title><h1>{plant.name}</h1></Card.Title>
                    <Card.Text>
                        <h3>Benefits:</h3> {plant.benefit}
                        <h3>Care Instructions:</h3>{plant.care} 
                        <h3>Progress Notes:</h3> 
                        {plant.progress_notes.map(note => <p>{moment(note.created_at).format("MMM Do YYYY")} - {note.text}</p>)}
                        <ProgressForm />
                    </Card.Text>
                </Card.Body>
            </Card>
            
        </div>
    )
}

export default PlantShow

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