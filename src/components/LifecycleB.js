/// page life cycle method such that mounting of all its 4 types 

import React,{ Component } from 'react'

class LifecycleB extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: 'nick'
        }

        console.log('lifecycleB constructor')    //first method
    }

    static getDerivedStateFromProps(props,state){                                /// first for update
        console.log('lifecycleB yet derived from props')        ///second
        return null 
    }

    componentDidMount(){
        console.log('lifecycle componentdidmount')       ///fourth
    }

    
    shouldComponentUpdate(){                                /// second for update
        console.log('lifecyelB shouldcomup')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('lifecycleB getSnapshotBeforeUpdate')
        return null                                                 //// fourth for update 
    }

    componentDidUpdate(){
        console.log('lifecycleB componentDidUpdate')          //// fifth for update 
    }


    render() {
        console.log('lifecycleB render')                // thrid fr both up and mount
        return(
            <div>lifecycleB
            </div>
        )
    }
}

export default LifecycleB