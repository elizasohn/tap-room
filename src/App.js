import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import KegList from './components/KegList';
import NewKegForm from './components/NewKegForm';
import NewKegControl from './components/NewKegControl';
import './App.css';
import './index.css';
import Error404 from './components/Error404';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
    handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }

  handleAddingNewKegToList(newKeg){
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

render() {
  return (
    <div>
    <Header/>
    <Switch>
      <Route path='/' component={Home} />
      <Route path='/keglist' component={KegList} />
      <Route path='/newkeg' render={()=><NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
      <Route path='*' component={Error404} />
    </Switch>
    </div>
  );
}

}
export default App;
