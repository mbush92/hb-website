import React ,{PropTypes} from 'react'
import FAQList from './FAQList'
import Spinner from 'react-spinkit'

function puke (data){
    return <pre>{JSON.stringify(data, null, '')} </pre>
  }

 
  
 function FAQ (props) {
    return  (
    props.isLoading === true
    ?<Spinner spinnerName="three-bouce"/>
    : <FAQList faqs={props.faqs}/>
    )
  }

  FAQ.propTypes = {
      isLoading:PropTypes.bool.isRequired,
      faqs:PropTypes.array.isRequired,
  }

module.exports = FAQ
