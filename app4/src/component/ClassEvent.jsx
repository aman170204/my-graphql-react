import React, {Component} from 'react';
class Header extends Component{

    constructor(){
        super();
        this.state={
            name:"Guest",
        };
    //this.onClickHandler = this.onClickHandler.bind(this)
    }

    //onClickHandler(){
    // console.log(this)
    //this.setState({
    //  name:'John'
    //})
    //}
onClickHandler = () =>{
    //console.log('Button Clicked)
    console.log(this);
    this.setState(
        {
            name:"John"
        }
    );
    };

    render(){
        return(
            <div>
                <h1>Welcome {this.state.name}</h1>
                {/*1st way */}
                {/* <button onClick={this.onClickHandler.bind(this)}>Login</button> */}
                 {/*2nd way */}
                {/* <button onClick={this.onClickHandler}>Login</button> */}
                {/*3rd way */}
                {/* <button onClick={()=> this.onClickHandler()}>Login</button> */}
        
                <button onClick ={this.onClickHandler}>Login</button>
            </div>
        );
    }
    
}
export default Header;
