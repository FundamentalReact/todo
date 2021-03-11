import React from 'react';

const withHocmp = (WrappedComponent,number) => {
    class WithHocmp extends React.Component{

        constructor(){
            super()
    
            this.state = {
                count: 0
            }
        }
    
        clickhandler = () => {
            this.setState({
                count: this.state.count+number
            })
        }

        render(){
            return(
            <WrappedComponent count={this.state.count}  increment={this.clickhandler} {... this.props}/>
            )
                
        }
    }
    
    return WithHocmp
}

export default withHocmp