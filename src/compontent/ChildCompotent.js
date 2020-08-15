import React from 'react'

function ChildCompotent(props) {
    return (
        <div>
           <button onClick={()=> props.Parent('this data')}>Get</button> 
        </div>
    )
}

export default ChildCompotent
