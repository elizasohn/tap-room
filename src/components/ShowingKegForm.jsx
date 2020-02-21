import React from 'react';
import PropTypes from 'prop-types';

function ShowingKegForm(props){
  return (
    <div className = 'button' >
      <button  onClick={props.onHandleShowingKegForm}>ADD A NEW KEG</button>
    </div>
  );
}

ShowingKegForm.propTypes = {
  onHandleShowingKegForm: PropTypes.func
};

export default ShowingKegForm;
