import React , {Component} from 'react'

class RegularComp extends Component{
    render(){
        console.log("reg com render")
        return (
            <div>
                regular Component {this.props.name}
            </div>
        )
    }
}

export default RegularComp