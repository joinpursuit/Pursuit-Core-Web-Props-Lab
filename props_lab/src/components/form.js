import React, { Component } from 'react'

class Form extends Component {
     
    state = {
        amount: "5"
    }
    handleChange = (e) => {
        // debugger
        this.setState({ 
            [e.target.name]: e.target.value
            
            
            
        })
    render(){
        console.log(this.state)
    return(
        <div>
    <form className="dontationForm">
        <div>
        Name: <input className="name" placeholder="Full Name"/>
        </div>
        <div>
        Caption: <input className="caption" placeholder="..."/>
        </div>
        <div>
        Amount to Donate: <input  name="amount" type="range" className="donationAmount" mins="5" max="1000" onChange={this.handleChange}/>
        <blockquote className="blockquote">
            <p name="amount" value={this.state.amount} className="displayAmount" >{ this.state.amount}</p>
            <button className="button">Donate</button>
            {this.testFunc}
        </blockquote>
       
        </div>
        </form>
    </div>
    )
    }
}


export default Form;