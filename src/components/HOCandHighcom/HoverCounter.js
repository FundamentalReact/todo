import React, { Component } from 'react'
import withHocmp from './withHocmp'

class HoverCounter extends Component{
    render(){
        const { count, increment} = this.props;
        return(
            <div>
                <h1 onMouseOver={increment}>Click mme {count} {this.props.name}</h1>
            </div>
        )
    }
}

export default withHocmp(HoverCounter,2)