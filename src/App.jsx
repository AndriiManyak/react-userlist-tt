import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Users } from './components/Users';

export const App = () => (
  <div className="App">
    <Header />

    <div className="App__content">
      <Switch>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <h3>This is home page. To see list of users go to users page</h3>
        </Route>
      </Switch>
    </div>
  </div>
);
