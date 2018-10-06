import React, { Component } from 'react';
import {connect} from 'react-redux';

class News extends Component {

  // useEditStatus = () => {
  //   console.log(this.props);
    
  //   const {dispatch} = this.props;
  //   dispatch({
  //     type: 'CHANGE_STATUS'
  //   })
  // }
  isH2 = () => {
    if(this.props.editStatus) {
      return <h2>News Component</h2>
    }
  }

  render() {
    return (
      <div>
        {this.isH2()}
        <button onClick= {this.props.useEditStatus} >Click</button>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      useEditStatus: () => {
        dispatch({
          type: 'CHANGE_STATUS'
        })
      }
    }
}


const mapStateToProps = (state, ownProps) => ({
  editStatus: state.editStatus
})


export default connect(mapStateToProps, mapDispatchToProps)(News)