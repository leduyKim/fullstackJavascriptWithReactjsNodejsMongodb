import React, { Component } from 'react'
import {connect} from 'react-redux'

class Header extends Component {
    
    viewAddddNote = (event) => {
        event.preventDefault();
        this.props.viewAddddNote();
        this.props.viewTitle();
    }

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
                        <li className="nav-item">
                            <a className="nav-link" onClick={event => this.viewAddddNote(event)} >Add Note</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAddNote: state.addDataReducer.isAddNote
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        viewAddddNote: () => {
            dispatch({
                type: 'CHANGE_EDIT_STATUS',
            })
        },
        viewTitle: () => {
            dispatch({
                type: 'CHANGE_ADD_STATUS'
            })
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Header)
