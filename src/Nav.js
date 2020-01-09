import React from 'react';

import { Link } from 'react-router-dom';
 
const Nav = () => {
    return (
       <div>
          <Link to="/">Home</Link>
          <Link to="/list">List</Link>
          <Link to="/search">Search</Link>
       </div>
    );
}
 
export default Nav;