import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import PlantsList from './components/plants/PlantsList'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Plants' component={PlantsList} />
            
        </Switch>
    )
}

export default Router