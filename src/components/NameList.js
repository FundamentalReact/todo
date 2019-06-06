import React from 'react'

function NameList(){
    const arrrray = ['kappa','sigma','zeta']
    const resultlsit = arrrray.map( name => <h2>{name}</h2> ) 
    return (
        <div> {  resultlsit  } </div>
              /* <h2>{arrrray[0]}</h2>
              <h2>{arrrray[1]}</h2> using other short approach
              <h2>{arrrray[2]}</h2> */


       
    )
}

export default NameList