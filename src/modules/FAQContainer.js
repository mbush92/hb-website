import React, {Component} from 'react'

import firebase from 'firebase'
import ReactFireMixin from 'reactfire'
import {app} from '../components/firebaseApp'
import FAQ from '../components/FAQ'

var ref = firebase.database().ref("/faqs")

class FAQContainer extends Component {
  constructor(){
    super()
    this.state = {
      faqs:[],
      isLoading:true
    }
  } 

  puke(data){
    return <pre>{JSON.stringify(data, null, '')} </pre>
  }

  componentWillMount(){

    this.setState(
      {
        isLoading:true
      }
    )
  
  }

  componentDidMount(){
    ref.on('value', (data)=>{
      console.log('[FIRE_BASE]',data.val())
      this.setState({
        isLoading:false,
         faqs:data.val()
      })
      
    })
  }

  render() {
    console.log(this.state.faqs)
    return this.state.isLoading == true 
    ? <p> LOADING </p>
    : <div>
     {this.puke(this.state.faqs)}
    </div>
  }
}

export default FAQContainer