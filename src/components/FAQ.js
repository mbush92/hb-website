import {React, Component} from 'react'

function puke(data){
    return <pre>{JSON.stringify(data, null, '')} </pre>
  }
  
function render(props) {
    console.log(props)
    return props.isLoading == true 
    ? <p> LOADING </p>
    : <div>
     {this.puke(props.faqs)}
    </div>
  }

export default render