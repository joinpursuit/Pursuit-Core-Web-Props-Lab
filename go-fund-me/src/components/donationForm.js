import React from "react"
// import ProgressBar from "./progressBar.js"
import DonationDisplay from "./donationDisplay.js"

class Form extends React.Component{
state = {
    amountDonated:"",
    name:"",
    caption:"",
    value:"",
    total:1000,
    donations:[
        {name:"Corey",
        ammount:"100",
        caption:"Take lots of pics"},
        {name:"Jon",
        ammount:"5",
        caption:"Stay hydrated"
        },
        {name:"Jhenya",
        ammount:"150",
        caption:"Have fun"}]
}

handleValue = e => {
   this.setState({
    value: e.target.value   
 })
}



render(){
    let donars = this.state.donations.map((donation, i) => {
        return <DonationDisplay key={donation.name} 
                                name={donation.name}
                                ammount={donation.ammount}                
                                caption={donation.caption}
                 />
      })
    return(

    <div>
    <form onSubmit={ this.handleForm }>
        <h2>Raised $ {this.state.ammount} of {this.state.total}</h2>
        <br/>
        name
        <br/>
        <input
        placeholder="John Doe"
        />
        <br/>
        caption
        <br/>
        <input
        placeholder="..."
        />
        <br/>
        Amount to Donate
        <br/>
        <input 
        type="range"   
        min="05" 
        max="100" 
        class="slider" 
        id="myRange"
        
        onChange={this.handleValue}        
        />
        <br/>
        <p>
        Value:<span id="spanValue">
                {this.state.value}
        </span>
        </p>
        <br/>
        <button>
            Donate
        </button>
        <br/>
        <h3>Recent Donations</h3>
        <div>
        {donars}
        </div>


		  
    </form>
    </div>
    )
}
}

export default Form