import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import List from './list/List';
import Search from './search/Search';
import './style/App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav/>
            <Switch>
              <Route path='/' component={Home} exact/>
              <Route path='/list' component={List} exact/>
              <Route path='/search' component={Search} exact />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
