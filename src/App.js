import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import News from './News';
import { connect } from 'react-redux';

class App extends Component {
  isH2 = () => {
    console.log(this.props.editStatus)
    if(this.props.editStatus) {
      return <h2>{this.props.dulieu}</h2>
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.isH2()}
        <News></News>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  dulieu: state.numbers,
  editStatus: state.editStatus
})


export default connect(mapStateToProps)(App)
