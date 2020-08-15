import React, { Component } from 'react'

export class InputRef extends Component {
    constructor(props) {
        super(props)
     this.inputRef=React.createRef();
    }
    findinput(){
        console.log('InputRef')
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>
            <input type="text" ref={this.inputRef}></input>
            </div>
        )
    }
}

export default InputRef
