import React, { Component } from 'react'

export default class NoteLists extends Component {
    render() {
        return (
            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    <div className="card">
                        <div className="card-header" role="tab" id="note1">
                            <h5 className="mb-0">
                                <a data-toggle="collapse" data-parent="#noteList" href="#note1Content" aria-expanded="true" aria-controls="note1Content">
                                    Ghi Chu ngay 30/09/2018
                                </a>
                            </h5>
                        </div>
                        <div id="note1Content" className="collapse in" role="tabpanel" aria-labelledby="note1">
                            <div className="card-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" role="tab" id="note1">
                            <h5 className="mb-0">
                                <a data-toggle="collapse" data-parent="#noteList" href="#node2Content" aria-expanded="true" aria-controls="node2Content">
                                    Ghi chu ngay 31/09/2018
                                </a>
                            </h5>
                        </div>
                        <div id="node2Content" className="collapse in" role="tabpanel" aria-labelledby="note1">
                            <div className="card-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
