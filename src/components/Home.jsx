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
    <h2> Welcome to Brew Time Tap Room!</h2>
  </div>
);
}

export default Home;
