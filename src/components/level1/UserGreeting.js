// it is for conditional if/else loop 

import React, { Component } from 'react'

class UserGreeting extends Component {
    
    constructor(props){
       super(props)

       this.state = {
           isLoggedIn : false
       }
    }

    render(){

        return this.state.isLoggedIn && <div>Welcome buddy</div>   // method 4

        // return (
        //     this.state.isLoggedIn ?         mthod 3
        //     <div>Welcome buddy</div> :
        //     <div>Welcome guest</div>
        // )
        
        // let message 
        // if(this.state.isLoggedIn){
        //   message = <div>Welcome buddy</div>
        // } else {
        //   message = <div>Welcome guest</div>    method 2
        // }

        // return <div>{message}</div>

        // if(this.state.isLoggedIn){
        //     return(                              mthoed 2
        //         <div>Welcome buddy</div>
        //     )
        // } else {
        //     return(
        //         <div>Welcome guest</div>
        //     )
        // }

        // return (
        //     <div>
        //        <div> Welcome buddy</div>
        //        <div>Welcome guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting