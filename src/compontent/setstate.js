import React, { Component } from 'react'

export default class setstate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    genertor(){
        this.setState((prevcont)=>({
            count:prevcont.count+1
        }))
    }
    
    render() {
        return (
            <div>
                <p>Count Click:{this.state.count}</p>
                <button onClick={()=>this.genertor()}>genertor</button>
            </div>
        )
    }
}


