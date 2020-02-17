import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <div className= "keg">
      <h2>{props.name}</h2>
      <h3>{props.brand}</h3>
      <h3>{props.price}</h3>
      <h3>{props.alcoholContent}</h3>
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
