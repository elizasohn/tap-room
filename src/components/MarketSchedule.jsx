import React from "react";
import PropTypes from "prop-types";

function MarketSchedule(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <h2>{props.brand}</h2>
      <h2>{props.price}</h2>
      <h2>{props.alcoholContent}</h2>
    </div>
    );
}

MarketSchedule.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
};

export default MarketSchedule;
