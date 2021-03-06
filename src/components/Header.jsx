import React from "react";
import { Link } from "react-router-dom";

var links = {
  color: "white",
  textAlign: "right",
  marginTop: "11vh"
};

function Header() {
  var headerStyle = {
    margin: "4vh auto",
    justifyContent: "left",
    backgroundImage: "url('btlogo.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "20vh",
    padding: "2vh",
    color: "white",
    borderRadius: "1vh",
    // border: '1px solid white',
    overflow: "hidden",
    width: "90%",
    height: "20%",
    alignItems: "center",
    textAlign: "center"
  };

  return (
    <div style={headerStyle}>
      <div style={links} className="links">
        <h2>
          <Link to="/" style={{ color: "#FFF" }}>
            HOME
          </Link>{" "}
          |
          <Link to="/keglist" style={{ color: "#FFF" }}>
            {" "}
            KEGS ON TAP
          </Link>{" "}
          |
          <Link to="/newkeg" style={{ color: "#FFF" }}>
            {" "}
            ADD A KEG
          </Link>{" "}
          |
          <Link to="/asdfasdf" style={{ color: "#FFF" }}>
            {" "}
            ERROR
          </Link>
        </h2>
      </div>
      <hr />
    </div>
  );
}

export default Header;
