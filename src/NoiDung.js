import React, { Component } from 'react'

export default class NoiDung extends Component {
    componentWillReceiveProps(nextProps) {
        console.log( 'componentWillReceiveProps da chay trong Noidung.js' );
    }
    
    shouldComponentUpdate(nextProps, nextState) {
      console.log( 'shouldComponentUpdate da chay trong NoiDung.js' );
      return true;
    }
    
    componentWillUpdate(nextProps, nextState) {
      console.log('componentWillUpdate da chay trong NoiDung.js');
    }
    
    componentDidUpdate(prevProps, prevState) {
      console.log('componentDidUpdate da chay trong NoiDung.js')
    }
    render() {
        console.log('render trong noidung.js')
        return (
            <div>
                <h4>{this.props.ten}</h4>
            </div>
        )
    }
}
