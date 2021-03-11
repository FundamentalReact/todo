import React, {Component} from 'react'

class Counter extends Component{
    render(){
        const { count,clickhandler} = this.props;
        return(
            <div>
                 <button onClick={clickhandler}>Click me {count}</button>
            </div>
        )
    }
}

export default Counter