import React, {PropTypes} from 'react'
import { Accordion, Panel } from 'react-bootstrap'


   function buildAccordionList(props) {
        return (
            props.map((data, index) => {
                return (
                    <Panel header={data.title} eventKey={index.toString()} key={index.toString()}>
                        {data.body}
                    </Panel>
                )
            })
        )
    }

   function FAQList(props) {
        return (
            <Accordion>
                {buildAccordionList(props.faqs)}
            </Accordion>
        )
    }

    FAQList.propTypes = {
        faqs:PropTypes.arrayOf(PropTypes.shape({
            title:PropTypes.string.isRequired,
            body:PropTypes.string.isRequired
        })
        )
    }
        
    

export default FAQList