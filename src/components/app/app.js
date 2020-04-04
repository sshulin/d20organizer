import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CalculatorPage, BuffsPage } from '../pages';
import Navbar from '../core/navbar';

const App = () => {
  return (
    <div className="app">
      <div className="app__header">
      </div>
      <div className="app__body">
        <div className="app__content">
          <Switch>
            <Route 
              path='/'
              component={HomePage}
              exact
            />
            <Route 
              path='/calculator'
              component={CalculatorPage}
            />
            <Route 
              path='/buffs'
              component={BuffsPage}
            />
          </Switch>
        </div>
      </div>
      <div className="app__footer">
        <div className="app__navbar">
           <Navbar />
        </div>
      </div>
    </div>
  )
};

export default App;