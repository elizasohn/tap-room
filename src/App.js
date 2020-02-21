import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import KegList from './components/KegList';
// import NewKegForm from './components/NewKegForm';
import NewKegControl from './components/NewKegControl';
import './App.css';
import './index.css';
import Error404 from './components/Error404';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [
        {
          name: "Pils",
          brand: "Heater Allen Brewing",
          price: "$7.00",
          alcoholContent: "4.8%"
        },
        {
          name: "HUB Lager",
          brand: "Hopworks Urban Brewery",
          price: "$6.50",
          alcoholContent: "5.1%"
        },
        {
          name: "Pilsner",
          brand: "Breakside Brewing Co.",
          price: "$6.50",
          alcoholContent: "5.3%"
        },
        {
          name: "Session Lager",
          brand: "Full Sail Brewing Co.",
          price: "$6.00",
          alcoholContent: "5.1%"
        },
        {
          name: "Kölsch",
          brand: "Occidental Brewing Co.",
          price: "$6.50",
          alcoholContent: "4.4%"
        },
        {
          name: "Sterling Pils",
          brand: "Ninkasi Brewing Co.",
          price: "$7.00",
          alcoholContent: "5.1%"
        },
        {
          name: "Omission Lager",
          brand: "Widmer Brothers Brewing",
          price: "$7.00",
          alcoholContent: "4.6%"
        },
        {
          name: "The Vaporizer",
          brand: "Double Mountain Brewery",
          price: "$7.50",
          alcoholContent: "6%"
        },
        {
          name: "Watershed IPA",
          brand: "Oakshire Brewing Co.",
          price: "$7.00",
          alcoholContent: "7.1%"
        },
        {
          name: "RPM",
          brand: "Boneyard Brewing Co.",
          price: "$6.50",
          alcoholContent: "7%"
        }
      ]
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
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
      <Route path='/' exact component={Home} />
      <Route exact path='/keglist' render={()=><KegList kegList={this.state.masterKegList} />} />
      <Route path='/newkeg' render={()=><NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
      <Route path='*' component={Error404} />
    </Switch>
    </div>
  );
}

}
export default App;
