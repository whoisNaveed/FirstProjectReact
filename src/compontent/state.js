import React, { Component } from 'react'

export default class states extends Component{

    constructor(){
        super()
        this.state={
message:'welcome news pages'
        }
    }

    changesmessage(){
        this.setState({
            message:'Thank You!'
        })
    }

    render(){
        return(
            <div>
                <p>{this.state.message}</p>
            <button onClick={()=>this.changesmessage()}>Subscribe</button>
            </div>
        )

        
    }

}