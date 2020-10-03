import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPlant } from '../../actions/plantsActions'

class PlantsForm extends Component{

    state = {
        name: '',
        species: '',
        benefits: '',
        care: '',
        difficulty: '',
        image: ''
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addPlant(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input type="text" value={this.state.name} name="name" onChange={this.handleChange} />
                <br/> 
                <label>Species:</label>
                <input type="text" value={this.state.species} name="species" onChange={this.handleChange} />
                <br/> 
                <label>Benefits:</label>
                <input type="text" value={this.state.benefits} name="benefits" onChange={this.handleChange} />
                <br/> 
                <label>Care:</label>
                <input type="text" value={this.state.care} name="care" onChange={this.handleChange} />
                <br/> 
                <label>Difficulty:</label>
                <input type="text" value={this.state.difficulty} name="difficulty" onChange={this.handleChange} />
                <br/> 
                <label>Image:</label>
                <input type="text" value={this.state.image} name="image" onChange={this.handleChange} />
                <br/> 
                <input type="submit" value="Add Plant" />
            </form>
        )
    }
}

export default connect(null, { addPlant })(PlantsForm)
