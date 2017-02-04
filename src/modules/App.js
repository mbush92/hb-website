import React, { Component } from 'react';
import {Jumbotron, Grid, Row } from 'react-bootstrap'
//import { Link } from 'react-router'
import './App.css'


class App extends Component {
  render() {
    return (
      <Jumbotron className="App-background"  >
        <Grid className="App-header-grid">
          <Row className="App-header-row" />
          <Row className="App-middle-row" opacity=".65%">
            <img className="App-row-image" opacity="1" role="presentation" src="http://uploads.webflow.com/56f679d988dad33d7badd5da/56f6eebac505ae3308553fef_Hirebotics%20-%20White%20WebSize.png" />
            <p className="App-middle-row-text">For the first time ever, hire a robot for your factory like you would hire an employee. </p>
          </Row>
          <Row className="App-header-row" />
        </Grid>
      </Jumbotron>
    );
  }
}

export default App;
