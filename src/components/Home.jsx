import React from "react";

function Home() {
  var homeStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: "4vh",
    overflow: "visible",
    borderRadius: "4vh",
    margin: "20px",
    fontSize: "14px",
    textAlign: "left",
    contentAlign: "center"
  };

  return (
    <div style={homeStyle}>
      <h1> WELCOME TO BREW TIME TAP ROOM!</h1>
    </div>
  );
}

export default Home;
