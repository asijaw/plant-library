import React from 'react'
import { connect } from 'react-redux'
import PlantCard from './PlantCard'

const PlantsList = ({ plants }) => {
    return (
        <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridGap: '10px',
            }}
        >
            {plants.map(plant => (
                <PlantCard key={plant.id} plant={plant} />
            ))}
                {/* <ul>
                    <li key={plant.id}>
                        {plant.name}
                    </li>
                </ul>)} */}
        </div>
    )
}

const mapStateToProps = state => {
    return { plants: state.plants }
}

export default connect(mapStateToProps)(PlantsList)