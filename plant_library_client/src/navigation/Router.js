import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../Home'
import CreatePlant from '../CreatePlant'
import About from '../About'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/new' component={CreatePlant} />
            <Route path='/about' component={About} />
            
        </Switch>
    )
}

export default Router