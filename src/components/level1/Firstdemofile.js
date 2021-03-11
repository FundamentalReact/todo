import React from 'react'

// function firstDemofile(){
//     return <h1>welcome</h1>
// }

const firstDemofile = (props) => {
console.log(props);
return (
    <div>
        <h1>{props.name}</h1>
        {props.children}
    </div>
)
}

export default firstDemofile