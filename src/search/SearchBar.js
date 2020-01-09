import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    };

    onChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type='text' value={this.state.term} onChange={this.onChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;