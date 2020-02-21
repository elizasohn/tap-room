import React from 'react';
import PropTypes from 'prop-types';
import NewKegForm from './NewKegForm';
import ShowingKegForm from './ShowingKegForm';

class NewKegControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false
    };
    this.handleShowingKegForm = this.handleShowingKegForm.bind(this);
  }

  handleShowingKegForm(){
    this.setState({formVisibleOnPage: true});
  }


    render(){
      let currentlyVisibleContent = null;
      if (this.state.formVisibleOnPage){
        currentlyVisibleContent = <NewKegForm onNewKegCreation={this.props.onNewKegCreation}/>;
      } else {
      currentlyVisibleContent = <ShowingKegForm onHandleShowingKegForm={this.handleShowingKegForm}/>;
      }
      return (
        <div>
        {currentlyVisibleContent}
        </div>
      );
    }
  }



NewKegControl.propTypes = {
    onNewKegCreation: PropTypes.func
  };

  export default NewKegControl;
