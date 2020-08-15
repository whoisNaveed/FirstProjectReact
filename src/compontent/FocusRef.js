import React, { Component } from 'react'
import InputRef from './InputRef';

export class FocusRef extends Component {
    constructor(props) {
        super(props)
       this.CompoentRef=React.createRef();
    }
    clickHandler=()=>{
        this.CompoentRef.current.findinput();
    }
    render() {
        return (
            <div>
                <InputRef ref={this.CompoentRef}></InputRef>
                    <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default FocusRef
