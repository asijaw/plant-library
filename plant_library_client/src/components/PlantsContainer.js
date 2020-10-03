import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPlants } from '../actions/plantsActions'
import PlantsForm from './PlantsForm'
import PlantsList from './PlantsList'
class PlantsContainer extends Component{

    componentDidMount(){
        this.props.fetchPlants()
    }
    render() {
        return (
            <div>
                Plants
                <PlantsForm />
            </div>
        )
    }
}


export default connect(null, {fetchPlants})(PlantsContainer)