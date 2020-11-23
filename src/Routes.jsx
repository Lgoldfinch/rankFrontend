import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import GetCarsLink from "./GetCarsLink";

const Routes = () => (
    <Router>
        <Scene key = "root">
            <Scene key = "home" component = {GetCarsLink} title "Home" initial = {true} />
        </Scene>
    </Router>
)

export default Routes