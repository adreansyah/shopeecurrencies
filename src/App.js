import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SiteExchange from 'pages/exchangecurrencies';

const App = prop => {
  return (
    <Router basename='/'>
      <Switch>
        <Route exact path='/' component={SiteExchange} />} />
        <Route exact path='/money-currencies' component={SiteExchange} />} />
      </Switch>
    </Router>
  )
}

export default App
