import React, {Component} from 'react'

class WithRenderProp extends Component{

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
        return(
            <div>
                {this.props.render( this.state.count,this.clickhandler)}
            </div>
        )
    }
}


export default WithRenderProp