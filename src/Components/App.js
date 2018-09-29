import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import SearchForm from './Content/SearchForm/SearchForm';
import TableData from './Content/Table-Data/TableData';
import AddUsers from './Content/AddUser/AddUser';
import Footer from './Footer/Footer';
import DataUser from './Content/Table-Data/Data.json';
import Uuidv1 from 'uuid/v1';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasFormUser: false,
      dataUser: [],
      searchText: '',
      isEditUser: false,
      userEditToObject: {}
    }
  }

  canFormUser = () => {
    this.setState({
      hasFormUser: !this.state.hasFormUser
    })

  }

  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    })
  }


  componentWillMount() {
    if (localStorage.getItem('userData') === null) {
      localStorage.setItem('userData', JSON.stringify(DataUser))
    } else {
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        dataUser: temp
      })
    }
  }


  addNewUserData = (name, phone, permission) => {
    var items = this.state.dataUser;
    var item = {};
    item.id = Uuidv1();
    item.name = name;
    item.phone = phone;
    item.permission = permission;
    items.push(item);
    this.setState({
      dataUser: items
    })
    localStorage.setItem('userData', JSON.stringify(items))
  }

  editUser = (user) => {
    this.setState({
      userEditToObject: user
    })

    this.isChangeStatusEdit();
  }

  isChangeStatusEdit = () => {
    this.setState({
      isEditUser: !this.state.isEditUser
    })
  }

  getInfoUser = (info) => {
    this.state.dataUser.forEach((value, key) => {
      if (value.id === info.id) {
        Object.assign(value, info);
      }
    })
    localStorage.setItem('userData', JSON.stringify(this.state.dataUser))
  }

  deleteUser = (id) => {
    this.setState({
      dataUser: this.state.dataUser.filter(value => value.id !== id)
    })
    localStorage.setItem('userData', JSON.stringify(this.state.dataUser.filter(value => value.id !== id)))
  }

  componentDidMount() {
    console.log('hello');
  }


  render() {

    var ketqua = [];
    this.state.dataUser.forEach(value => {
      if (value.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(value)
      }
    })
    return (
      <div>
        <Header></Header>
        <div className="serachForm mt-3">
          <div className="container">
            <div className="row">
              <SearchForm getInfoUser={(info) => this.getInfoUser(info)} userEditToObject={this.state.userEditToObject} isChangeStatusEdit={() => this.isChangeStatusEdit()} isEditUser={this.state.isEditUser} getTextSearch={(dl) => this.getTextSearch(dl)} canFormUser={() => this.canFormUser()} isButton={this.state.hasFormUser} ></SearchForm>
              <TableData deleteUser={(id) => this.deleteUser(id)} editUser={(user) => this.editUser(user)} dataUser={ketqua} ></TableData>
              <AddUsers isFormUser={this.state.hasFormUser} getNewUserData={(name, phone, permission) => this.addNewUserData(name, phone, permission)} ></AddUsers>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
