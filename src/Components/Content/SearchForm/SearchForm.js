import React, { Component } from 'react'
import EditUser from '../AddUser/EditUser';

export default class SearchForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            textValue: '',
            infoUser: {}
        }
        this.isInputChange = this.isInputChange.bind(this)
    }

    isButton = () => {
        if (this.props.isButton) {
            return (
                <button type="button" onClick={() => this.props.canFormUser()} className="btn btn-block btn-outline-secondary">Đóng</button>
            )
        } else {
            return <button type="button" onClick={() => this.props.canFormUser()} className="btn btn-block btn-outline-secondary">Thêm</button>
        }

    }
    
    isInputChange = (event) => {
        this.setState({
            textValue: event.target.value
        })
        this.props.getTextSearch(event.target.value);
    }

    updateUser = (info) => {
        this.setState({
            infoUser: info
        })
        this.props.getInfoUser(info)
    }

    isEditUser = () => {
        console.log( this.props.isEditUser );
        if(this.props.isEditUser === true) {
            return <EditUser updateUser = {info => this.updateUser(info)} userEditToObject = {this.props.userEditToObject} isChangeStatusEdit = {this.props.isChangeStatusEdit} ></EditUser>
        }
    }

    render() {
        return (
            <div className="container">
                {this.isEditUser()}
                <div className="row">
                    <div className="col-9">
                        <div className="form-group">
                            <div className="input-group">
                                <input type="text" onChange={event => {this.isInputChange(event)}} className="form-control" placeholder="Nhập từ khóa tìm kiếm" />
                                <div className="input-group-append">
                                    <button onClick={() => this.props.getTextSearch(this.state.textValue)} className="btn btn-sm btn-outline-primary" type="button">Tìm Kiếm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        {this.isButton()}
                    </div>
                </div>
            </div>

        )
    }
}
