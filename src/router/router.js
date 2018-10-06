import React, { Component } from 'react';
import {
    Route, Switch
} from 'react-router-dom';
import News from '../components/News';
import NewDetail from '../components/New_detail';
import Contact from '../components/Contact';
import Home from '../components/Home';


export default class RouterApp extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/news" component={News} />
                <Route path="/contact" component={Contact} />
                <Switch>
                    <Route path="/new-detail/:slug.:id.html" component={NewDetail} />
                </Switch>
                
            </div>
        )
    }
}
