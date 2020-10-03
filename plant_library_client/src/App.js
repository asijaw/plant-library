import React from 'react'
import Router from './Router'
import PlantsContainer from './containers/PlantsContainer'
import Navbar from './navigation/Navbar';

const App = () => {
    return (
        <div>
            <Navbar />
            <PlantsContainer />
            <Router />
        </div>
    )
}

export default App