import React from 'react'
import {BrowserRouter as Router,Route,} from "react-router-dom";
import Home from '../pages/Home'

class AppRouter extends React.Component{
    render(){
        return(
        <Router basename={`${process.env.PUBLIC_URL}/`}>
            <Route exact path='/' component={Home}/>
        </Router>
        )
    }
}

export default AppRouter;