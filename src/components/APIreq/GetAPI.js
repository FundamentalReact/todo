import React , { Component } from 'react'
import Axios from 'axios'

class GetAPI extends Component{

    constructor(){
        super()

        this.state = {
            data: []
        }
    }

    componentDidMount(){
        Axios.get("https://jsonplaceholder.typicode.com/posts")
             .then(Response => { this.setState(
                 {data: Response.data}
             ); console.log(this.state.data)})
             .catch(error => {console.error(error)})
    }

    render(){

        const varData = this.state.data.map( (index) => {
              return <div key={index.id}>{index.title}</div>
        });

        return(
            <div>
               {varData}
            </div>
        )
    }
}

export default GetAPI