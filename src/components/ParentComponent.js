// method as props where child component want to communicate with parent 
// for parent we using class component and for child we are using functional component 

import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component{

    constructor(props){
        super(props)

        this.state = {
            parentName: 'parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        alert ( `Hello ${this.state.parentName} from ${childName}`)
    }

    render(){
        return (
            <div>
                   <ChildComponent greetHandler = {this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent