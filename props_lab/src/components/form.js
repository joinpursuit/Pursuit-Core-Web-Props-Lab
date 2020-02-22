import React, { Component } from 'react'
import DonationReason from './DonationReason'

class Form extends Component {
     
    state = {
        name:"",
        caption:"",
        amount: "5"
    }
    handleChange = (e) => {
        // debugger
        this.setState({ 
            [e.target.name]: e.target.value
            
             })
            }
    // handleClick = (e) => {
    //     e.preventDefault()
        
    //     return(
    //         <DonationReason 
    //         name={this.state.name}
    //         caption={this.state.caption}
    //         amount={this.state.amount}
    //         />
    //     )

    // }
    render(){
     console.log(this.state)
   //let{ name, caption, amount } = this.state
    return(
        <div>
    <form className="dontationForm">
        <div>
        Name: <input className="name" name="name" placeholder="Full Name" onChange={this.handleChange}/>
        </div>
        <div>
        Caption: <input className="caption" name="caption" placeholder="..." onChange={this.handleChange}/>
        </div>
        <div>
        Amount to Donate: <input  name="amount" type="range" className="donationAmount" mins="5" max="1000" onChange={this.handleChange}/>
        <blockquote className="blockquote">
            <p name="amount" value={this.state.amount} className="displayAmount" >{ this.state.amount}</p>
            <button type="submit" className="button" onClick={(e)=>{e.preventDefault() 
            DonationReason({name:this.state.name, caption:this.state.caption,donationAmount:this.state.amount})}}>Donate</button>
        </blockquote>
       
        </div>
        </form>
    </div>
    )
    }
}


export default Form;