import React, { Component } from 'react'
import {PageHeader} from 'react-bootstrap'
import firebase from 'firebase'
import ReactFireMixin from 'reactfire'
import { app } from '../components/firebaseApp'
import FAQ from '../components/FAQ'

console.log(FAQ)
var ref = firebase.database().ref("/faqs")

class FAQContainer extends Component {
  constructor() {
    super()
    this.state = {
      faqs: [],
      isLoading: true
    }
  }

  componentWillMount() {

    this.setState(
      {
        isLoading: true
      }
    )

  }

  componentDidMount() {
    ref.on('value', (data) => {
      console.log('[FIRE_BASE]', data.val())
      this.setState({
        isLoading: false,
        faqs: data.val()
      })

    })
  }

  render() {
    return (
      <div >
        
        <div className="App-backgroud-short"/>
        <PageHeader className="App"> Frequently Asked Questions </PageHeader>
        <FAQ
          isLoading={this.state.isLoading}
          faqs={this.state.faqs}
        />
      </div>
    );
    
  }
}

export default FAQContainer