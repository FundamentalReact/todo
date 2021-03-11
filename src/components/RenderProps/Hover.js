import React , { Component} from 'react'

class Hover extends Component{

    constructor(){
        super()

        this.state = {
            count: 0
        }
    }

    clickhandler = () => {
        this.setState({
            count: this.state.count+1
        })
    }

    render(){
        const { count,clickhandler} = this.props;
        return(
            <div>
               <h1 onMouseOver={clickhandler}>Hover me {count}</h1>
            </div>
        )
    }
}

export default Hover