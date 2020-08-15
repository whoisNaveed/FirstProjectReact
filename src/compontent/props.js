import React, { Component } from 'react'
import '../App.css';

export default class props extends Component{
    render(){
        return(
        <div>
            <p>This is descption about you.</p>
        <h1 className='App-link'>Name:{this.props.name}</h1>
             </div>
        )
    }
}