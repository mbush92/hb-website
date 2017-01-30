import React, { Component } from 'react';
import '../modules/App.css'
class Button extends Component {
  render() {
    // console.log(this.props)
   return 
     <div className="Button" color={this.props.color} onClick={() => alert('this button says '+ this.props.text)}>
        {this.props.text}
    </div>
  }
  
}

export default Button;

//