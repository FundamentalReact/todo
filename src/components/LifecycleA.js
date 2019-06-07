/// page life cycle method such that mounting and updaeting of all its 4 types 

import React,{ Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: 'nick'
        }

        console.log('lifecycleA constructor')    //first method
    }

    static getDerivedStateFromProps(props,state){                   // first for update 
        console.log('lifecycle yet derived from props')        ///second
        return null 
    }

    componentDidMount(){
        console.log('lifecycle componentdidmount')       ///fourth
    }

    shouldComponentUpdate(){                                /// second for update
        console.log('lifecyelA shouldcomup')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('lifecycleA getSnapshotBeforeUpdate')
        return null                                         //// fourth for update 
    }

    componentDidUpdate(){
        console.log('lifecycleA componentDidUpdate')          //// fifth for update 
    }

    changeState = () => {
        this.setState({
            name: 'codeEvolution'
        })
    }

    render() {
        console.log('lifecycleA render')                // thrid  for both up and mount 
        return(
           <div>
                <div>lifecycleA  </div>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB/>
           </div>
        )
    }
}

export default LifecycleA