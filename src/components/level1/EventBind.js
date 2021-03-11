import React, {Component} from 'react'

class EventBind extends Component {

    constructor(props){
        super(props)

        this.state = {
            message: 'Hello'
        }

      //  this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message: 'good bye'
    //     })
    //     console.log(this)
    // }


    clickHandler = () => {
        this.setState({
        message: 'good bye'
    })
    }

    render(){
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>ClickEvent</button>
            </div>
        )
    }
}

export default EventBind