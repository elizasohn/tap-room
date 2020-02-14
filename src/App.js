import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import KegList from './components/KegList'
import './App.css';

function App() {
  return (
    <div>
    <Header/>
    <Switch>
      <Route exact path='/keglist' component={KegList} />
    </Switch>
    </div>
  );
}

export default App;
