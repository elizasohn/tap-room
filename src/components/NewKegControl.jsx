import React from 'react';
import PropTypes from 'prop-types';
import NewKegForm from './NewKegForm';

class NewKegControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  handleClick(){
  console.log('Hey, you clicked me! I do not have code to change my state quite yet, but I will in a moment!');
}
    render(){
      let currentlyVisibleContent = null;
      if (this.state.formVisibleOnPage){
        currentlyVisibleContent = <NewKegForm onNewKegCreation={this.props.onNewKegCreation}/>;
      } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
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
