import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CardList from './Components/CardListPage';


const routes = (
  <Switch>
    <Route
      exact
      path={'/'}
      component={CardList}
    />
  </Switch>
);


export default routes;

