import React, { Component } from 'react'

export class Refcomp extends Component {
    constructor(props) {
        super(props)
        this.inputRef=React.createRef();
    }
    findInputRef(){
        console.log(this.inputRef.current)
        this.inputRef.current.focus();
    }
    
    render() {
        return (
            <div>
                {/* <input type="text" ref={this.inputRef}></input> */}
            </div>
        )
    }
}

export default Refcomp
