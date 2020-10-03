import React from 'react'
import { connect } from 'react-redux'

const PlantsList = ({ plants }) => {
    return (
        <div>
            {plants.map(plants => 
                <ul>
                    <li key={plants.id}>
                        {plants.name}
                    </li>
                </ul>)}
        </div>
    )
}

const mapStateToProps = state => {
    return { plants: state.plants }
}

export default connect(mapStateToProps)(PlantsList)