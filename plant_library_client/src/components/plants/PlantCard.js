import React, { useState } from 'react'
import useHover from '../../navigation/useHover';

const PlantCard = ({ plant }) => {const [hovering, hoveringActions] = useHover();

    return (
        <div {...hoveringActions} style={{ border: '1px solid' }} >
            {hovering ? <p>{plant.species}</p> : <p>{plant.name}</p>}
        </div>
    )
}
export default PlantCard
