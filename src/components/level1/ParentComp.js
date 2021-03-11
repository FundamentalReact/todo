import React , {Component} from 'react'
import RegularComp from './RegularComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

class ParentComp extends Component{
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
               <MemoComp name={this.state.name}/>
               {/* <RegularComp name={this.state.name}/>
               <PureComp name={this.state.name}/> for demonstrate memo compo of func comp renedring */}        
            </div>
        )
    }
}

export default ParentComp