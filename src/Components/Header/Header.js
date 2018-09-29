import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand mx-auto" style={{ color: 'white' }}> Quản lý thành viên bằng React Js</a>
                </nav>
            </header>
        )
    }
}
