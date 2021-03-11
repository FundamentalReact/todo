import React , { Component } from 'react'

class Firstclasscom extends Component {
    render(){
        return <h1>Welcome {this.props.name}</h1>
   //    return React.createElement('div',{id:'hello'},React.createElement('h1',null,"Welcome Boy"))   
    }
}

export default Firstclasscom