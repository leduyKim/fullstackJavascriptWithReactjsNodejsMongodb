import React, { Component } from 'react';
import { v1 } from 'uuid'
import { connect } from 'react-redux';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleNote: '',
            contentNote: ''
        }
        this.addData = this.addData.bind(this);
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    addData = () => {
        var item = {};
        item.id = v1();
        item.title = this.state.titleNote;
        item.content = this.state.contentNote;
        this.props.addDataStore(item);
    }
    /*
 * jQuery autoResize (textarea auto-resizer)
 * @copyright James Padolsey http://james.padolsey.com
 * @version 1.04
 */



render() {
    return (
        <div className="col-4">
            <h3>Edit Content Note</h3>
            <form  >
                <input type="search" placeholder="Search" />
                <div className="form-group">
                    <label htmlFor="titleNote">Title Note</label>
                    <input required onChange={(event) => this.isChange(event)} type="text" className="form-control" name="titleNote" id="titleNote" aria-describedby="titleNoteId" placeholder="enter title note please" />
                    <small id="titleNoteId" className="form-text text-muted">enter title note please!</small>
                </div>
                <div className="form-group">
                    <label htmlFor="contentNote">Content Note</label>
                    <textarea required onChange={(event) => this.isChange(event)} className="form-control" name="contentNote" id="contentNote" defaultValue={""} />
                </div>
                <button type="reset" onClick={this.addData} className="btn btn-primary btn-block" style={{ borderRadius: 20 }}>Save</button>
            </form>
        </div>
    )
}
}

const mapStateToProps = (state, ownProps) => ({
    test: state.test
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (item) => {
            dispatch({
                type: 'ADD_DATA',
                item
            })
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);