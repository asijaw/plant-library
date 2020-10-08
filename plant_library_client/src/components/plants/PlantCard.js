import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PlantCard = ({ plant }) => {

    return (
        
        <Link to={`/plants/${plant.id}`}>
            <Card style={cardStyle}>
                <Card.Body>
                    <Card.Img src={plant.image} style={imageStyle} alt={plant.name}/>
                    <Card.Title>{plant.name}</Card.Title>
                </Card.Body>
            </Card>

        </Link>

    )
}
export default PlantCard

const cardStyle = {
    border: 'solid',
    marginBottom: 25,
    marginTop: 25,
    marginLeft: 25,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 25,
    paddingTop: 25,
    height: 250,
    width: 250,
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
