import React from 'react'

export default function () {
   function  funtionclick(){
        console.log('click halndfer')
    }
    return (
        <div>
            <button onClick={ funtionclick}>funtionclcik</button>
        </div>
    )
}
