import React, { Component } from 'react'
import Redirect from 'react-router-dom/Redirect'

export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isRedirect : false,
            fCity: "Sai Gon"
        }
    }
    
    handleSubmit = (event) => {
        this.setState({isRedirect: true});
        event.preventDefault(); // ngan chan
        
    }
    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        })
    }
    isFileChange = event => {
        const nameFile = event.target.files[0].name;
        this.setState({
            fFile: nameFile
        })
    }
    render() {
        if(this.state.isRedirect) {
            console.log(this.state)
            return <Redirect to="/" />
        }
        return (
            <div>
                <header className="masthead tintuc">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-12 my-auto">
                                <div className="header-content mx-auto">
                                    <h1 className="mb-5 text-center">Trang Lien He</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <section id="contact">
                        <div className="container">
                            <h2 className="text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                            <hr className="star-dark mb-5" />
                            <div className="row">
                                <div className="col-lg-8 mx-auto">
                                    {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                                    {/* The form should work on most web servers, but if the form is not working you may need to configure your web server differently. */}
                                    <form name="sentMessage"  id="contactForm" noValidate="novalidate">
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>Name</label>
                                                <input name="fName" onChange={event => this.handleChange(event)} className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>Email Address</label>
                                                <input name="fEmail" onChange = {event => this.handleChange(event)} className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>Phone Number</label>
                                                <input name="fPhone" onChange={event => this.handleChange(event)} className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>Message</label>
                                                <textarea name="fMess" onChange={event => this.handleChange(event)} className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>City</label>
                                                <select defaultValue={this.state.fCity} onChange={event => this.handleChange(event)} className="form-control" name="fCity">
                                                    <option value="Ha Noi" >Ha Noi</option>
                                                    <option value = "Da Nang" >Da Nang</option>
                                                    <option value = "Sai Gon" >Sai Gon</option>
                                                </select>
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>File</label>
                                                <input type="file" onChange={event => this.isFileChange(event)} className="form-control-file" name="fFile"/>
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <br />
                                        <div id="success" />
                                        <div className="form-group">
                                            <button type="submit" onClick={event => this.handleSubmit(event)} className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
