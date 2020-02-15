import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import KegList from './components/KegList';
import './App.css';
import './index.css';

function App() {
  return (
    <div>
    <Header/>
    <Home/>
    <Switch>
      <Route exact path='/keglist' component={KegList} />
    </Switch>
    </div>
  );
}

export default App;
