import React , { Component } from 'react'

class Message extends Component {

    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }
    
    changeMessage(){
        this.setState({
            message: 'Thanks for subscribing'
        })
    }

    render(){
        return (
            <div> 
            <h1>  {this.state.message}   </h1>
            <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div> 
           )

   //    return React.createElement('div',{id:'hello'},React.createElement('h1',null,"Welcome Boy"))   
    }
}

export default Message