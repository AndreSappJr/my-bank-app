import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Login from './components/login';
import CreateAccount from './components/create-account';
import Withdraw from './components/withdraw';
import Deposit from './components/deposit';
import About from './components/about';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/withdraw" component={Withdraw} />
          <Route path="/deposit" component={Deposit} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
