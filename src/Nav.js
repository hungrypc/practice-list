import React from 'react';

import { Link } from 'react-router-dom';

const Nav = () => {
   return (
      <div className="ui compact menu">
         <Link className="item" to="/">Home</Link>
         <div className="ui simple dropdown item">
            Practice Projects
            <i className="dropdown icon"></i>
            <div className="menu">
               <Link className="item" to="/list">List</Link>
               <Link className="item" to="/search">Search</Link>
               <Link className="item" to="/youtube">Youtube</Link>
               <Link className="item" to="/songs">Songs</Link>
            </div>
         </div>

      </div>
   );
}

export default Nav;