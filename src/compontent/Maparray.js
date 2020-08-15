import React from 'react'
import Personlist from './Personlist'

function Maparray() {
   // const namelist=['Naveed','Ram','test']
    const personlist=[{
        'Name':'Naveed',
        'skill':'Asp.net',
        'exp':'2years'
},{
    'Name':'Ram',
    'Skill':'Mvc',
    'exp':'3 years'

}
]

const person=personlist.map(person=><Personlist persons={personlist}/>)
    return (
        <div>
                {person}
        </div>
    )
}

export default Maparray
