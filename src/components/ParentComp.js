import React , {PureComponent} from 'react'
import RegularComp from './RegularComp';
import PureComp from './PureComp';

class ParentComp extends PureComponent{
    constructor(props){
        super(props)

        this.state = {
            name: 'nick'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'nick'
            })
        }, 2000)
    }

    render(){
        console.log("======================== parent Commpp render ++++++++++++++++")
        return (
            <div>
               Parent compponent
               <RegularComp name={this.state.name}/>
               <PureComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp