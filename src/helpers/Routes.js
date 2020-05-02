import React,{Component } from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import Home from '../Home';
import history from './History'

export default class Routes extends Component{

    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    {/* <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Products" component={Products} /> */}
                </Switch>
            </Router>
        )
    }
}