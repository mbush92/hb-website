import React, { Component } from 'react';
import Button from './Button'; // Import a component from another file
import '../modules/App.css'
class DangerButton extends Component {
  render() {
    return <Button color="red" text={this.props.text}/>
  }
}

export default DangerButton;