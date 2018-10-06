import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import NoteLists from './NoteLists';
import NoteForm from './NoteForm';
import Footer from './Footer';

class App extends Component {
  
  render() {
    return (
      <div>
        <Header></Header>
        <div className="container mt-5 pt-4">
          <div className="row">
            <NoteLists></NoteLists>
            <NoteForm></NoteForm>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;