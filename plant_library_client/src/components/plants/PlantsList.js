import React from 'react'
import { connect } from 'react-redux'
import PlantCard from './PlantCard'

const PlantsList = ({ plants }) => {
    return (
       <div >
            {plants.map(plant => (
                <PlantCard key={plant.id} plant={plant} />
            ))}
                
        </div>
    )
}

const mapStateToProps = state => {
    return { plants: state.plants }
}

export default connect(mapStateToProps)(PlantsList)