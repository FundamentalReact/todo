import React, { Component } from 'react'
import withHocmp from './withHocmp'

class ClickCounter extends Component{
    render(){
        const { count, increment} = this.props;
        return(
            <div>
            <button onClick={increment}> Click mme {count} {this.props.name}</button>
            </div>
        )
    }
}

export default withHocmp(ClickCounter,2)