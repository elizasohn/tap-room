import React from 'react';
import PropTypes from 'prop-types';

function ShowingKegForm(props){
  return (
    <div>
      <button onClick={props.onHandleShowingKegForm}>Add A New Keg</button>
    </div>
  );
}

ShowingKegForm.propTypes = {
  onHandleShowingKegForm: PropTypes.func
};

export default ShowingKegForm;
