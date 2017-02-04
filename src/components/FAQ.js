import React from 'react'

function puke (data){
    return <pre>{JSON.stringify(data, null, '')} </pre>
  }
  
 function FAQ (props) {
    return  (
    props.isLoading === true
    ?<div> LOADING </div>
    : <div>{puke(props.faqs)} </div>
    )
  }

module.exports = FAQ
