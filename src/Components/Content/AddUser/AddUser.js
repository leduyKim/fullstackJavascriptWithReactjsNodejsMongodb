import React, { Component } from 'react'

export default class AddUsers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            phone: "",
            permission: ""
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    isFormUser = () => {
        if (this.props.isFormUser === true) {
            return (
                <div className="col">
                    <div className="card border-primary mb-3 ">
                        <div className="card-header">Thêm mới User</div>
                        <form>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input type="text" name="name" onChange = {(event) => this.isChange(event)} className="form-control" placeholder="nhập Tên User" aria-describedby="helpId" />
                                </div>
                                <div className="form-group">
                                    <input type="number" name="phone" className="form-control" onChange = {(event) => this.isChange(event)} placeholder="nhập số điện thoại" aria-describedby="helpId" />
                                </div>
                                <div className="form-group was-validated">
                                    <select defaultValue = {0} onChange = {(event) => this.isChange(event)} name="permission" className="custom-select" >
                                        <option value={0}>Chọn quyền mặc định</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Modrator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input className="btn btn-block btn-primary" type="reset" onClick = {() => this.props.getNewUserData(this.state.name, this.state.phone, parseInt(this.state.permission, 10))} value="Them moi" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div>

                {this.isFormUser()}
                
            </div>

        )
    }
}
