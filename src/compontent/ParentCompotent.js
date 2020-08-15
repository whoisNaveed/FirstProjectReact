import React, { Component } from 'react'
import ChildCompotent from './ChildCompotent';

export class ParentCompotent extends Component {
    constructor(){
        super()
        this.state={
            greet:'Hello'
        }
        this.Parentgreet=this.Parentgreet.bind(this);
    }
    Parentgreet(chiddata){
        alert(`hello ${this.state.greet}   test ${chiddata}`)
    }

    render() {
        return (
            <ChildCompotent Parent={this.Parentgreet}></ChildCompotent>
        )
    }
}

export default ParentCompotent

