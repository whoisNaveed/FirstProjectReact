import React from 'react'

function Personlist({persons}) {
    console.log({persons});
    return (
        <div>
              <h1>I am {persons.Name} ,I am knownledge {persons.Skill} with experience of {persons.exp}</h1>
            
        </div>
    )
}

export default Personlist
