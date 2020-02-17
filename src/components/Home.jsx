import React from "react";

function Home(){
  var homeStyle = {
  backgroundImage: "url('beerhall.jpg')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  textAlign: 'center',
  }

return (
  <div style = {homeStyle}>
    <h1> WELCOME TO BREW TIME TAP ROOM!</h1>
  </div>
);
}

export default Home;
