import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import List from './list/List';
import Search from './search/Search';
import Youtube from './youtube/Youtube';
import Songs from './songs/components/Songs';
import Blog from './blog/components/Blog';
import Stream from './stream/components/Stream';

import './style/App.css';

class App extends Component {

  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Nav />
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/list' component={List} exact />
              <Route path='/search' component={Search} exact />
              <Route path='/youtube' component={Youtube} exact />
              <Route path='/songs' component={Songs} exact />
              <Route path='/blog' component={Blog} exact />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
