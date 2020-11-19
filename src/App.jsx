import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { UserList } from './components/UserList';

export const App = () => (
  <div>
    <div>
      <Header />

      <Switch>
        <Route path="/users">
          <UserList />
        </Route>
        <Route path="/">
          <div>Home page</div>
        </Route>
      </Switch>
    </div>
  </div>
);
