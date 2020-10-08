import React from 'react'
import {Card} from 'react-bootstrap'
const About = () => {
    const image = "https://images.unsplash.com/photo-1518552536705-8b7ef534301f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    return (
        <Card style={cardStyle}>
                <Card.Body>
                    <Card.Title><h1>Welcome to Plant Library</h1></Card.Title>
                    <Card.Img src={image} style={imageStyle} />
                    <Card.Body>
                        <h3>Keep a log of all of your plant babies and their progress.</h3>
                        <br/>
                        <h2>HAPPY PLANTING! </h2>
                    </Card.Body>
                </Card.Body>
            </Card>
       
    )
}

export default About

const cardStyle = {
    justifyContent: 'center',
    textAlign: 'center'
}

const imageStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    marginBottom: 10
}