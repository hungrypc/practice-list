import React, { Component } from 'react';
import SearchBar from './SearchBar';

import '../style/search.css';

class Search extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     }
//   }

  render() {
    return (
        <div className="search ui container">
            <SearchBar/>
        </div>     
    );
  }
}

export default Search;
