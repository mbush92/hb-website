import React, { Component } from 'react'
import {PageHeader, Button} from 'react-bootstrap'
import firebase from 'firebase'
import ReactFireMixin from 'reactfire'
import { app } from '../components/firebaseApp'
import FAQ from '../components/FAQ'
import Bar from '../components/bar'
import BarTest from '../components/BarTest'
import io from 'socket.io-client'
let socket = io(`http://localhost:4000`)

console.log(FAQ)
var ref = firebase.database().ref("/faqs")

class FAQContainer extends Component {
  constructor() {
    super()
    this.state = {
      faqs: [],
      isLoading: true
    }
    //this.puke = this.puke.bind(this)
  }

  componentWillMount() {

    this.setState(
      {
        isLoading: true,
        isToggled: false
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

    socket.on('response', (msg)=>{
      this.setState({
        isLoading: false,
       // faqs: data.val()
       msg: msg.i,
       hasObject:msg.hasObject
      })
    })
  }

  startTimer = (e) => {
    e.preventDefault()
    console.log('Does this change hot reload')
    this.setState(prevState => ({
      isToggled: !prevState.isToggled,
      isLoading: !prevState.isLoading 
    }))
    console.log(this.state.isLoading)
    socket.emit('start')
  }

  stopTimer = (e) => {
    socket.emit('stop')
  }

  resetTimer = (e) => {
    socket.emit('reset')
  }

  render() {
    return (
      <div >
        <Button  bsStyle="primary" bsSize="large" onClick={this.startTimer}> START </Button>
        <Button  bsStyle="primary" bsSize="large" onClick={this.stopTimer}> STOP </Button>
        <Button  bsStyle="primary" bsSize="large" onClick={this.resetTimer}> RESET </Button>
        <span> {JSON.stringify(this.state.msg, null, '')} </span>
        <div className="App-backgroud-short"/>
        <PageHeader className="App"> Frequently Asked Questions </PageHeader>
        <FAQ
          isLoading={this.state.isLoading}
          faqs={this.state.faqs}
        />
        <BarTest value={this.state.msg} hasObject={this.state.hasObject}/>
        <Bar value={this.state.msg} label="Gripper Opening"/>
      </div>


    );
    
  }
}

export default FAQContainer