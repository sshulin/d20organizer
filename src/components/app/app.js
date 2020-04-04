import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CalculatorPage, BuffsPage } from '../pages';
import './app.css';

const App = () => {
  return (
    <Switch>
      <Route 
        path={process.env.PUBLIC_URL + '/'}
        component={CalculatorPage}
        exact
      />
      <Route 
        path={process.env.PUBLIC_URL + '/buffs'}
        component={BuffsPage}
      />
    </Switch>
  )
};

export default App;