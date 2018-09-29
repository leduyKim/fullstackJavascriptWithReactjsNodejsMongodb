import React, { Component } from 'react'

export default class EditUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.userEditToObject.id,
            name: this.props.userEditToObject.name,
            phone: this.props.userEditToObject.phone,
            permission: this.props.userEditToObject.permission
        }
    }

    isChangeInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    saveInfoUserNew = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.phone = this.state.phone;
        info.permission = this.state.permission;
        this.props.updateUser(info);
        this.props.isChangeStatusEdit();
    }

    render() {
        return (
            <div>
                <div className="card bg-info text-white mb-3 ">
                    <div className="card-header">Edit User</div>
                    <form>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input type="text" onChange = {this.isChangeInput.bind(this)} name="name" defaultValue={this.props.userEditToObject.name} className="form-control" placeholder="nhập Tên User" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <input type="number" onChange = {this.isChangeInput.bind(this)} name="phone" defaultValue={this.props.userEditToObject.phone} className="form-control" placeholder="nhập số điện thoại" aria-describedby="helpId" />
                            </div>
                            <div className="form-group was-validated">
                                <select onChange = {this.isChangeInput.bind(this)} defaultValue={this.props.userEditToObject.permission} name="permission" className="custom-select" >
                                    <option value={0}>Chọn quyền mặc định</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Modrator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input className="btn btn-block btn-primary" type="button" onClick={this.saveInfoUserNew} defaultValue="Save" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
