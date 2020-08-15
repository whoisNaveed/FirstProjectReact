import React, { Component } from 'react'

export default class ClassClick extends Component {
    ClassClick(){
        console.log('click tested');
    }
    render() {
        return (
            <div>
                <button onClick={this.ClassClick}>test</button>
            </div>
        )
    }
}
