import React, { Component } from 'react'

export default class RowTable extends Component {
    checkPermission = () => {
        if(this.props.permission === 1) 
            return "Admin"
        else if(this.props.permission === 2 )
            return "Moderator"
        else
            return "Normal"
    }
    
    editUser = () => {
        this.props.editUser();
    }

    deleteUser = (id) => {
        this.props.deleteUser(id);
    }

    render() {
        return (
            <tr>
                <td >{this.props.stt}</td>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>{this.checkPermission()}</td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-sm btn-warning sua" onClick = {this.editUser} ><i className="fas fa-edit"/>Sửa</div>
                        <div className="btn btn-sm btn-danger delete" onClick = {() => this.deleteUser(this.props.id)} ><i className="fas fa-edit    " />Xóa</div>
                    </div>
                </td>
            </tr>
        )
    }
}
