import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <div className= "keg">
      <h3>{props.name}</h3>
      <h2>{props.brand}</h2>
      <h2>{props.price}</h2>
      <h2>{props.alcoholContent}</h2>
    </div>
    );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
};

export default Keg;
