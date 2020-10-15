import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class PlantCard extends React.Component {

   state = {
       num : 0
   }

    handleOnClick = (e) => {
        e.stopPropagation()
        this.setState((state) => ({
            num: state.num + 1
        }));
    }

    render () {

        return (
            
            <Link to={`/plants/${this.props.plant.id}`}>
                <Card style={cardStyle}>
                    <Card.Body>
                        <Card.Img src={this.props.plant.image} style={imageStyle} alt={this.props.plant.name}/>
                        <Card.Title>{this.props.plant.name}</Card.Title>
                        <button onClick={this.handleOnClick}> Like {this.state.num} </button>
                    </Card.Body>
                </Card>

            </Link>

        )
    }
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
