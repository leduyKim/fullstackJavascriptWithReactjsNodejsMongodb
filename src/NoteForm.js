import React, { Component } from 'react';
import { v1 } from 'uuid'
import { connect } from 'react-redux';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleNote: '',
            contentNote: '',
            id: ''
        }
    }

    componentWillMount() {
        if(this.props.infoForm) {
            this.setState({
                titleNote: this.props.infoForm.title,
                contentNote: this.props.infoForm.content,
                id: this.props.infoForm.id
            })
            
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    addData = () => {
        if(this.state.id) {
            let editObject = {};
            editObject.id = this.state.id;
            editObject.title = this.state.titleNote;
            editObject.content = this.state.contentNote;
            this.props.editDataStore(editObject);
        } else {
            var item = {};
            item.id = v1();
            item.title = this.state.titleNote;
            item.content = this.state.contentNote;
            this.props.addDataStore(item);
        }
    }

    editTitle = () => {
        if(this.props.isAdd) {
            return <h3>Add Content Note</h3>
        }
        else 
            return <h3>Edit Content Note</h3>
    }

render() {
    return (
        <div className="col-4">
            {this.editTitle()}
            <form>
                <div>
                    <div className="form-group">
                        <label htmlFor="titleNote">Title Note</label>
                        <input defaultValue={this.props.infoForm.title} onChange={(event) => this.isChange(event)} type="text" className="form-control" name="titleNote" id="titleNote" aria-describedby="titleNoteId" placeholder="enter title note please" />
                        <small id="titleNoteId" className="form-text text-muted">enter title note please!</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="contentNote">Content Note</label>
                        <textarea required onChange={(event) => this.isChange(event)} className="form-control" name="contentNote" id="contentNote" defaultValue={this.props.infoForm.content} />
                    </div>
                </div>
                <button type="reset" onClick={() => this.addData()} className="btn btn-primary btn-block" style={{ borderRadius: 20 }}>Save</button>
            </form>
        </div>
    )
}
}

const mapStateToProps = (state, ownProps) => ({
    editItem: state.hasForm.dataElement,
    isAdd: state.hasForm.isAdd
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (item) => {
            dispatch({
                type: 'ADD_DATA',
                item: item
            })
        },
        editDataStore: (item) => {
            dispatch({
                type: 'EDIT',
                item: item
            })
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);