import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { addPlant } from '../../actions/plantsActions'

class PlantsForm extends Component{

    state = {
        name: '',
        benefit: '',
        care: '',
        image: '',
        progress_notes: []
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleNotes = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: this.state.progress_notes.push(value)
          })
        console.log(this.state.progress_notes)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addPlant(this.state)
        this.props.history.push("/")
    }

    render() {
        return (
            <div style={{textAlign:'center', justifyContent:'center', alignItems:'center', height: '100vh'}}>
                <h1>Add a New Plant to the Collection!!</h1>
            <form onSubmit={this.handleSubmit} style={{  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                <label><strong>Name: </strong></label>
                <input type="text" value={this.state.name} name="name" onChange={this.handleChange} />
                <br/> 
                <label><strong>Benefits:</strong></label>
                <input type="text" value={this.state.benefit} name="benefit" onChange={this.handleChange} />
                <br/> 
                <label><strong>Care:</strong></label>
                <input type="text" value={this.state.care} name="care" onChange={this.handleChange} />
                <br/> 
                <label><strong>Image:</strong></label>
                <input type="text" value={this.state.image} name="image" onChange={this.handleChange} />
                <br/> 
                {/* <label><strong>Progress Note:</strong></label>
                <input type="text" value={this.state.progress_notes} name="progress_notes" onChange={this.handleNotes} /> */}
                <br/> 
                <input type="submit" value="Add Plant" />
            </form>
            </div>
        )
    }
}

export default withRouter(connect(null, { addPlant })(PlantsForm)
)