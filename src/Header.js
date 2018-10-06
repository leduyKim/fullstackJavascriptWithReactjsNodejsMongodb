import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Note Manager</a>
                <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="/collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="justify-content-end collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Lists Note</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
