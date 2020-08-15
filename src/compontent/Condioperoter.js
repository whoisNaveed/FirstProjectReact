import React, { Component } from 'react'

export class Condioperoter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             islogged:false
        }
    }
    
    render() {

        //this is shorthand key render based on render

        return(this.state.islogged&&<div>welcome user</div>)

        // this is tetanry opertor  is conditional render
        //return (this.state.islogged?<div>welcome user</div>:<div>welcome guest</div>)

        // this is element condition render
        // let Message;
        // if(this.state.islogged)
        // Message=<div>welcome user</div>
        // else
        // Message=<div>welcome Guest</div>
        // return Message;

        //this is if else condition render
        
        // if(this.state.islogged){
        //  return  <div>welcome user</div>
        // }
        // else{
        //     return  <div>Guest user</div>
        // }
    }
}

export default Condioperoter
