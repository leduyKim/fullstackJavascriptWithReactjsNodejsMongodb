import React, { Component } from 'react'
import NewItem from './NewItem';
import dl from './dulieu.json'

export default class News extends Component {
    render() {
        return (
            <div>
                <header className="masthead tintuc">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-12 my-auto">
                                <div className="header-content mx-auto">
                                    <h1 className="mb-5 text-center">Trang danh sach tin</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <div className="row">
                        {dl.map((value, key) => (
                            <NewItem key={key} newId = {value.id} title = {value.title} imageUrl = {value.imageUrl} blockquote={value.blockquote} ></NewItem>
                        ))}
                    </div>
                </div>
            </div>

        )
    }
}
