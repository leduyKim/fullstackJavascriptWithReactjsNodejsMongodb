import React, { Component } from 'react'
import dl from './dulieu.json';
import NewRelated from './NewRelated';
import { Link } from 'react-router-dom';

export default class NewDetail extends Component {
  render() {
    return (
      <div>
        <header className="masthead tintuc">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-12 my-auto">
                <div className="header-content mx-auto">
                  <h1 className="mb-5 text-center">Chi tiet tin</h1>
                </div>
              </div>
            </div>
          </div>
        </header>
        {dl
          .filter(value => value.id === parseInt(this.props.match.params.id, 10))
          .map((value, idx) => (
                <div key={idx} className="jumbotron">
                  <Link to = "/news"><img src={value.imageUrl} className="img-fluid text-center rong" alt="for me" /></Link>
                  <p className="lead text-center">{value.title}</p>
                  <hr className="my-2" />
                  <p>{value.content}</p>
                </div>
              )
          )}
          
        <div className="container">
          <h4 className="card-title text-center">Tin lien quan</h4>
          <div className="row">
            <div className="col-12">
              <div className="card-deck">
                {
                  dl
                    .filter(value => value.id !== parseInt(this.props.match.params.id, 10))
                    .map((value, idx) => (
                      <NewRelated key={idx} title={value.title} newId={value.id} blockquote={value.blockquote} imageUrl={value.imageUrl} ></NewRelated>
                    ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
