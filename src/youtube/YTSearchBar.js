import React, { Component } from 'react';

import '../style/youtube.css';

class YTSearchBar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };

    onSubmit = () => {
        event.preventDefault();
        // this.props.onSubmit(this.state.term)
    }


    render() {
        return(
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type='text' value={this.state.term} onChange={this.onChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default YTSearchBar;