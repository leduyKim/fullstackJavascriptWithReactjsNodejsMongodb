import React, { Component } from 'react'
import Link from 'react-router-dom/Link';
import ToSlug from '../helper/ToSlug';

export default class NewRelated extends Component {
    render() {
        return (
            <div className="card">
                <Link to={`/new-detail/${ToSlug.to_slug(this.props.title)}.${this.props.newId}.html`}>
                    <img className="card-img-top" src={this.props.imageUrl} alt="for me" />
                </Link>
                <div className="card-body">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">{this.props.blockquote}</p>
                </div>
            </div>

        )
    }
}
