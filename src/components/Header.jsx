import React from "react";
import { Link } from 'react-router-dom';

var links = {
  color: 'white',
  textAlign: 'right',
}

function Header(){
  var headerStyle = {
    margin: '4vh auto',
    justifyContent:'left',
    backgroundImage: "url('btlogo.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: '11vh',
    padding: '2vh',
    color:'white',
    borderRadius: '1vh',
    // border: '1px solid white',
    overflow: 'hidden',
    width:'80%',
    height:'20%',
    alignItems: "center",
    textAlign:'center',

  }

  return (
    <div style = {headerStyle}>
      <h1></h1>
      <div style = {links} className="links">
      <Link to="/" style={{ color: '#FFF' }}>HOME</Link> | <Link to="/keglist" style={{ color: '#FFF' }}>KEGS ON TAP</Link>
      </div>
      <hr/>
    </div>
  );
}


export default Header;
