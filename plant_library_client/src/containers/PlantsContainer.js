import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPlants } from '../actions/plantsActions'
import Router from '../navigation/Router'
import PlantShow from '../components/plants/PlantShow'
import PlantsList from '../components/plants/PlantsList'
import { Route, Switch } from 'react-router-dom'

class PlantsContainer extends Component{
    
    componentDidMount(){
        this.props.fetchPlants()
    }
    render() {
        return (
            <div>
                <Router/>

                <Switch>
                    <Route path='/plants/:plantId' render={routerProps => 
                        <PlantShow plants={this.props.plants} {...routerProps} />
                    } />

                    <Route path='/plants' render={() => 
                        <PlantsList />
                    } />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { plants: state.plants }
}

export default connect(mapStateToProps, {fetchPlants})(PlantsContainer)