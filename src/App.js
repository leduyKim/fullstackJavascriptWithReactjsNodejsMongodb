import React, { Component } from 'react';
import './App.css';
import NoiDung from './NoiDung';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trangThai: 'khoitao',
      trangThai1: 'da update'
    }
  }
  
  componentWillMount() {
    console.log( 'ham componentWillMount dang chay' );
  }
  
  componentDidMount() {
    console.log( 'ham componentDidMount dang chay' );
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log( 'shouldComponentUpdate da chay' );
    return true;
  }
  
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate da chay');
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate da chay')
  }
  
  capNhatState = () => this.setState({
    trangThai: 'trang thai da duoc up date',
  })

  render() {
    console.log( 'ham render dang chay' );
    return (
      <div className="App">
        <NoiDung ten={this.state.trangThai1} ></NoiDung>
        <button onClick={() => this.capNhatState()} className="btn btn-success" >Update</button>
      </div>
    );
  }
}

export default App;
