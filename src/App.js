import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import NoteLists from './NoteLists';
import NoteForm from './NoteForm';
import Footer from './Footer';
import { firebaseData } from './model/firebase';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataFirebase: []
    }
  }

  getData = () => {
    firebaseData.on('value', (notes) => {
      var data = [];
      notes.forEach(element => {
        const { key } = element;
        const { title, content } = element.val();
        data.push({
          id: key,
          title,
          content
        })
      })
      this.setState({
        dataFirebase: data
      })
    })
  }
  
  getNoteLists = () => {
    if(this.state.dataFirebase.length) {
      return this.state.dataFirebase.map((element, key) => {
        return <NoteLists key = {key}  dataFirebase = {element} ></NoteLists>
      })
    }
  }
    
  viewForm = () => {
    if(this.props.isEdit) {
      return <NoteForm infoForm = {this.props.infoForm} ></NoteForm>
    }
  }

  componentWillMount() {
    this.getData()
  }

  render() {
    
    return (
      <div>
        <Header></Header>
        <div className="container mt-5 pt-4">
          <div className="row">
            <div className="col">
              {this.getNoteLists()}
            </div>  
            {this.viewForm()}
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.hasForm.isEdit,
    infoForm: state.hasForm.dataElement
  }
}

export default connect(mapStateToProps)(App)