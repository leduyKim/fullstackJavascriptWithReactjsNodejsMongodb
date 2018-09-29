import React, { Component } from 'react'
import RowTable from './TableDataRow/RowTable';

export default class TableData extends Component {
    mapRowTable = () => this.props.dataUser.map((value, key) => (
            <RowTable deleteUser = { (id) => this.props.deleteUser(id) } id = {value.id} key={key} editUser = {() => this.props.editUser(value)} stt={key + 1} name={value.name} phone={value.phone} permission={value.permission} ></RowTable>
        ))

    render() {

        return (
            <div className="col">
                <table className="table table table-striped table-bordered table-hover table-responsive-md">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện thoại</th>
                            <th>Phân Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mapRowTable()}
                    </tbody>
                </table>
            </div>

        )
    }
}
