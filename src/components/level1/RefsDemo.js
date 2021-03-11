/// to acces the dom nodes easily so using refs 

import React, {Component} from 'react'

class RefsDemo extends Component {

    constructor(props){
        super(props)

        this.inputRef = React.createRef()  // first approach to create ref

        // second apporach by using callback refs starts from here  
        this.cbRef = null  
        this.setcbRef =  (element) => {
            this.cbRef = element
        }

    }

    componentDidMount(){
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
        if(this.cbRef) {
            this.cbRef.focus()
        }
    }

    ClickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render(){
        return (
            <div>
               <input type="text" ref={this.inputRef}/>
               <input type="text" ref={this.setcbRef}/>
               <button onClick={this.ClickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo