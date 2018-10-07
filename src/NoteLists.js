import React, { Component } from 'react'
import { connect } from 'react-redux';
class NoteLists extends Component {

    editForm = () => {
        this.props.viewForm();
        this.props.infoform(this.props.dataFirebase);
    }
    
    render() {
        return (
            <div id="noteList" role="tablist" aria-multiselectable="true">
                <div className="card">
                    <div className="card-header" role="tab" id="note1">
                        <h5 className="mb-0">
                            <a data-toggle="collapse" data-parent="#noteList" href={"#" + this.props.dataFirebase.id} aria-expanded="true" aria-controls="note1Content">
                                {this.props.dataFirebase.title}
                            </a>
                            <div className="btn-group float-right" >
                                <button className="btn btn-outline-info" onClick={this.editForm} >Edit</button>
                                <button className="btn btn-outline-danger" >Remove</button>
                            </div>
                        </h5>
                    </div>
                    <div id={this.props.dataFirebase.id} className="collapse in" role="tabpanel" aria-labelledby="note1">
                        <div className="card-body">
                            {this.props.dataFirebase.content}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isEdit: state.isEdit
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        viewForm: () => {
            dispatch({
                type: 'CHANGE_EDIT_STATUS'
            })
        },
        infoform: (item) => {
            dispatch({
                type: 'GET_DATA',
                item: item
            })
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(NoteLists)
