import React, { Component } from 'react'
import {NavLink, Link } from 'react-router-dom'
export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <Link className="navbar-brand js-scroll-trigger" to="/">Start Bootstrap</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink to="/news" className="nav-NavLink js-scroll-trigger" >Tin tuc</NavLink>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-NavLink js-scroll-trigger" >Chi tiet tin tuc</Link>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-NavLink js-scroll-trigger">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
