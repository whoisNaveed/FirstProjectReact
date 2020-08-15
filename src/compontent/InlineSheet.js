import React, { Component } from 'react'

const header={
    fontSize:'89px'
}
export class InlineSheet extends Component {
    render() {
        return (
            <div>
                <h1 style={header}> inline sample</h1>
            </div>
        )
    }
}

export default InlineSheet
