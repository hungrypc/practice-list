import React, { Component } from 'react';

import YTSearchBar from './YTSearchBar';

class Youtube extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div className="ui container">
                <YTSearchBar />
            </div>
        )
    }
}

export default Youtube;