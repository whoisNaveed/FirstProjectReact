import React, { Component } from 'react'
import InputFd from './InputFd'

export class FocusFw extends Component {
    constructor(props) {
        super(props)
        this.inputref=React.createRef();
    }
    clckhandler=()=>{
        this.inputref.current.focus();
    }
    
    render() {
        return (
            <div>
                <InputFd ref={this.inputref}></InputFd>
                <button onClick={this.clckhandler}>Click Forword</button>
            </div>
        )
    }
}

export default FocusFw
