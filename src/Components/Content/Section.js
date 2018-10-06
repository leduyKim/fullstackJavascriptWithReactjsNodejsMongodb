import React, { Component } from 'react'

export default class Section extends Component {

    constructor(props) {
        super(props)
        this.state = {
            canChange: 0,
        }
    }
    

    edit = () => {
        alert('đây là hàm xử lý cho edit');
    }

    remove = () => {
        alert('đây là hàm xử lý cho remove');
    }

    addParams = x => {
        alert(x);
    }
    editClick = () => this.setState({canChange: 1});

    saveClick = () => {
        this.setState({canChange: 0});
        console.log(this.textValue.value);
    }


    renderButton = () => (
        <div className="row ">
            <div className="mx-auto mb-2">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-danger" onClick = {this.editClick} >Edit</button>
                    <button type="button" className="btn btn-secondary" onClick = {this.remove} >Remove</button>
                    {/* <button type="button" className="btn btn-secondary" onClick = {() => this.addParams('thêm tham số vào hàm')} >addParams</button>
                    <button type="button" className="btn btn-secondary" onClick = {this.addParams.bind(this,'addParams 2')} >addParams 2</button> */}
                </div>
            </div>
        </div>
    )

    renderForm = () => (
        <div className="row ">
            <div className="mx-auto mb-2">
                <div className="form-group form-inline">
                    <input type="text" ref = {(input) => this.textValue = input} defaultValue = {this.props.tieude} name = "ten" className = "form-control" />
                    <button type="button" className="btn btn-success" onClick = {() => this.saveClick()} >Save</button>
                </div>
            </div>
        </div>
    )

    displayCheck = () => this.state.canChange === 0 ? this.renderButton() : this.renderForm();

    render() {
        return (
            <div>
                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className={"col-lg-6 " + this.props.vitri1}>
                                <div className="p-5">
                                    <img alt="" className="img-fluid rounded-circle" src={this.props.anh} />
                                </div>
                            </div>
                            <div className= {"col-lg-6 " + this.props.vitri2}>
                                <div className="p-5">
                                    <h2 className="display-4">{this.props.tieude}</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                                </div>
                            </div>
                        </div>
                        {this.displayCheck()}
                    </div>
                </section>
            </div>
        )
    }
}
