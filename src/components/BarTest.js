import React, { Component } from 'react'


class BarTest extends Component {
    render() {
        return (
        <div>
            <div  height="50px" style={{ background:  '#cccccc', display: "inline-block", marginBottom: "6px", padding:"0px", width:"90%" }}>
                <span style={{ background: this.props.hasObject ? "green" :'#303030', display: "inline-block", width:100*this.props.value/100+"%" }} height="48px">
                    <div>
                        Hi
                    </div>
                </span>
            </div>
        </div>
        )
    }
}

export default BarTest