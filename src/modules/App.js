import React, { Component } from 'react';
var logo = 'http://uploads.webflow.com/56f679d988dad33d7badd5da/56f686a6f58de1387bbb841c_Hirebotics%20-%20Robot%20Man%20White.png';
import DangerButton from '../components/DangerButton'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router'
import './App.css'
import NavBar from '../components/NavBar'

class App extends Component {
  renderDangerButton(){
    return <DangerButton text="Hi"/>
  }
  render() {
    return (
      <div>
        Welcome to the home page!
      </div>
    );
  }
}

export default App;
