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

// var React = require('react');

// function puke (obj) {
//   return <pre>{JSON.stringify(obj, null, ' ')}</pre>
// }

// function ConfirmBattle (props) {
//   return props.isLoading === true
//     ? <p>LOADING</p>
//     : <div>CONFIRM BATTLE: {puke(props)}</div>
// }

// module.exports = ConfirmBattle;