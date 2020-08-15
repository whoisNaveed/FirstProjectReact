import React, { Component } from 'react'

export class EventBinding extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello"
        }
        this.clickHandler= this.clickHandler.bind(this);
    }
clickHandler(){
    this.setState({
        message:"Bye!"
    })
}
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.clickHandler.bind(this)}>Click Me!</button> */}
                {/* <button onClick={()=>this.clickHandler()}>ClickMe!</button> */}
                <button onClick={this.clickHandler}>click Me!</button>
            </div>
        )
    }
}

export default EventBinding
