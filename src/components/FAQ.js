import React ,{PropTypes} from 'react'
import FAQList from './test'

function puke (data){
    return <pre>{JSON.stringify(data, null, '')} </pre>
  }

 
  
 function FAQ (props) {
    return  (
    props.isLoading === true
    ?<div> LOADING </div>
    : <FAQList faqs={props.faqs}/>
    )
  }

  FAQ.propTypes = {
      isLoading:PropTypes.bool.isRequired,
      faqs:PropTypes.array.isRequired,
  }

module.exports = FAQ
