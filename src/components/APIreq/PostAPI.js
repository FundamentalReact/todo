import React , { Component } from 'react'
import Axios from 'axios'

class PostAPI extends Component{

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

    handler = () => {
        var  postData = [];
        this.state.data.map( (index) => {
            return postData.push(index.title)
        });
        
        Axios.post("https://jsonplaceholder.typicode.com/posts", postData)
             .then(Response => { console.log(Response)})
             .catch(error => { console.log(error)})
    }


    render(){

        const varData = this.state.data.map( (index) => {
              return <div key={index.id}>{index.title}</div>
        });

        return(
            <div>
               {varData}
               <button onClick={this.handler}>Click me</button>
            </div>
        )
    }
}

export default PostAPI