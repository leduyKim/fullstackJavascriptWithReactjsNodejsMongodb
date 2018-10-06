import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <section id="footer" className="mt-2">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                            <ul className="list-unstyled list-inline social text-center">
                                <li className="list-inline-item"><a href="/"><i className="fa fa-facebook" /></a></li>
                                <li className="list-inline-item"><a href="/"><i className="fa fa-twitter" /></a></li>
                                <li className="list-inline-item"><a href="/"><i className="fa fa-instagram" /></a></li>
                                <li className="list-inline-item"><a href="/"><i className="fa fa-google-plus" /></a></li>
                                <li className="list-inline-item"><a href="/" target="_blank"><i className="fa fa-envelope" /></a></li>
                            </ul>
                        </div>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                            <p className="h6">© All right Reversed.<a className="text-green ml-2" href="https://www.sunlimetech.com">Sunlimetech</a></p>
                        </div>
                        <hr />
                    </div>
                </div>
            </section>

        )
    }
}
