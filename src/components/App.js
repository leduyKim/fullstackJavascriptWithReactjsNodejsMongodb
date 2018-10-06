import React, { Component } from 'react';
import './../css/App.css';
import Nav from './Nav';
import Footer from './Footer';
import RouterApp from '../router/router';
import {
  BrowserRouter as Router
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav></Nav>
            <RouterApp></RouterApp>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
