import React, { Component } from 'react';
import './App.css';
import TopMenu from './Components/topmenu/TopMenu';
import Header from './Components/Header/Header';
import Section from './Components/Content/Section';
import Footer from './Components/Footer/Footer';

class App extends Component {
  sectionArray = [
    {anh: 'img/01.jpg',vitri1: 'order-lg-2', vitri2: 'order-lg-1', tieude: 'For those about to rock...'},
    {anh: 'img/02.jpg',vitri1: '', vitri2: '', tieude: 'We salute you!'},
    {anh: 'img/03.jpg', vitri1: 'order-lg-2', vitri2: 'order-lg-1', tieude: 'Let there be rock!'}
  ]
  render() {
    return (
      <div className="top-menu">
        <TopMenu></TopMenu>
        <Header></Header>
        {this.sectionArray.map(x => <Section anh = {x.anh} vitri1 = {x.vitri1} vitri2 = {x.vitri2} tieude = {x.tieude} ></Section>)}
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
