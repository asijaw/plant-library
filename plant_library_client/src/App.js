import React, { Component } from 'react'

import PlantsContainer from './containers/PlantsContainer'
import Navbar from './navigation/Navbar';


class App extends Component {

    render() {
        return (
            <>  
                <Navbar />
                <PlantsContainer />
            </>
            
        );
    }
}


export default App