import React, { Component, } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from 'pages/Dashboard';
import Account from 'pages/Account';
import Error from 'pages/Error';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/account-settings' exact component={Account} />
          <Route component={Error} />
        </Switch>
      </Router>
    )
  }
}

export default App;