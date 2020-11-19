import React from 'react'
import {BrowserRouter as Router,Route,} from "react-router-dom";
import Home from '../pages/Home'

class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={Home}></Route>
            </Router>
        )
    }
}

export default AppRouter;