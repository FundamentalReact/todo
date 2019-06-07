/// use for reading array of functions data for name list file

import React from 'react'

function Person({person,index}){
    return (
        <div>
            <h2 key={index}>{index} {person.name}, {person.age}, {person.shill}</h2>
        </div>
    )
}

export default Person