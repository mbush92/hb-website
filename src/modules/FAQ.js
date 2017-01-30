import React from 'react'
import firebase from 'firebase'
import ReactFireMixin from 'reactfire'
import {app} from '../components/firebaseApp'
console.log('[APP from FAQ]', app)
var ref = firebase.database().ref("/faqs")
console.log('[REF]', ref)
export default React.createClass({
  mixins: [ReactFireMixin], 
  getInitialState(){
    return {
      faqs:[],
    }
  },
  // componentWillMount(){
  // var ref = firebase.database().ref("faqs");
  // this.bindAsArray(ref, "faqs");
  // },
  componentDidMount(){
    ref.on('value', (data)=>{
      console.log('[FIRE_BASE]',data.val())
      this.setState(
        {
          faqs:data.val()
        }
      )
    })
  },
  render() {
    console.log(this.state.faqs)
    return <div>FAQ's
    </div>
  }
})