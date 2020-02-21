import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";
import NewKegForm from './NewKegForm';
import ShowingKegForm from './ShowingKegForm';


var keglistStyle = {
  display:'flex',
  flexWrap: 'wrap',
  justifyContent:'center',
  backgroundColor: '#000000',
  padding: '4vh',
  opacity: '.7',
  overflow: 'visible',
  borderRadius: '4vh',
  margin:'10px',
  fontSize: '14px',
  textAlign: 'left',
}

function KegList(props){

  return (
    <div style = {keglistStyle}>
      {props.kegList.map((keg, index) =>
        <Keg name={keg.name}
        brand={keg.brand}
        price={keg.price}
        alcoholContent={keg.alcoholContent}
        key={index}/>
      )}
    </div>
  );
}
KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;
