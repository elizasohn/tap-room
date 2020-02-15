import React from "react";
import { Link } from 'react-router-dom';

var links = {
  color: 'white',
}

function Header(){
  var headerStyle = {
    margin: '1vh auto',
    justifyContent:'left',
    backgroundImage: "url('beercloseup.jpeg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: '2vh',
    color:'white',
    textShadow: '.1vh .1vh .7vh #000000',
    boxShadow: '.1vh .1vh .7vh #000000',
    borderRadius: '4vh',
    border: '4px solid white',
    overflow: 'hidden',
    width:'40%',
    alignItems: "center",
    textAlign:'center',

  }

  return (
    <div style = {headerStyle}>
      <h1>Beer Time Tap Room</h1>
      <div style = {links}>
      <Link to="/">Home</Link> | <Link to="/keglist">Kegs on Tap</Link>
      </div>
    </div>
  );
}


export default Header;
