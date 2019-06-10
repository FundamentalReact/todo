/// forwarding refs

import React from 'react'

// function FRInput(){
//     return(
//         <div> 
//             <input type="text"/>                    new way to define the functional component such that 
//         </div>                                       able to forward the parent ref to child
//     )
// }


const FRInput = React.forwardRef( (props, ref) => {       //fporward ref methdo
    return(
        <div> 
           <input type="text" ref={ref}/>                    
        </div>                                     
    ) 
})


export default FRInput