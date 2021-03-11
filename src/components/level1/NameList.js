import React from 'react'
import Person from './Person';

function NameList(){
    //const arrrray = ['kappa','sigma','zeta']
    const persons = [
        {
            id :1,
            name : 'bruce',
            age:30,
            shill: 'react'
        },
        {
            id :2,
            name : 'clark',
            age:31,
            shill: 'polymer'
        },
        {
            id :3,
            name : 'diana',
            age:33,
            shill: 'angular'
        }
    ]
    const resultlsit = persons.map( (person,index) => 
      //  ( <Person key={person.id} person={person}/> )   // this is unique id can be treated as key
      
      ( <Person key={index} index={index} person={person}/> )

        )  // here key prop can be id or name bcoz both fields data are unique so in the data when ever their is unique value in array we can pass it as key value in map method 
    return (
        <div> {  resultlsit  } </div>
              /* <h2>{arrrray[0]}</h2>
              <h2>{arrrray[1]}</h2> using other short approach
              <h2>{arrrray[2]}</h2> */


       
    )
}

export default NameList