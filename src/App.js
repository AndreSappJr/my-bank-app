import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import CreateAccount from './CreateAccount';
import Navbar from './Navbar';
import Withdraw from './Withdraw';
import Deposit from './Deposit';
import About from './About';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/create-account" component={CreateAccount} />
        <Route path="/withdraw" component={Withdraw} />
        <Route path="/deposit" component={Deposit} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
