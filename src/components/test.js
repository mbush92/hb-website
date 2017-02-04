import React from 'react'
import { Accordion, Panel } from 'react-bootstrap'


   function buildList(props) {
        let i = 0
        return (
            props.map((data) => {
                i++
                return (
                    <Panel header={data.title} eventKey={i}>
                        {data.body}
                    </Panel>
                )
            })
        )
    }


   function FAQList(props) {
        return (
            <Accordion>
                {buildList(props.faqs)}
            </Accordion>
        )
    }

export default FAQList