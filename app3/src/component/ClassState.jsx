import React, {Component} from 'react'

class Header extends Component{
        constructor(){
            super();
            this.state={
                name:'Guest',
                email:'Guest@example.com'
            }
        }

        onSubmitHandler = () =>{
            console.log('Button Clicked');
            this.setState({
                name: 'John'
            })
        }

        render(){
            return(
                <div>
                    <h1>Welcome from class compoent{this.state.name}, {this.state.email}</h1>
                    {/* react is smart enough that it won't update email */}
                    <button onClick ={this.onSubmitHandler}>
                    Login ClassComponent
                    </button>
                </div>
            )
        }
}

export default Header;