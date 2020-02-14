import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import MarketScheduleList from './components/MarketScheduleList'
import './App.css';

function App() {
  return (
    <div>
    <Header/>
    <Switch>
      <Route exact path='/marketschedulelist' component={MarketScheduleList} />
    </Switch>
    </div>
  );
}

export default App;
