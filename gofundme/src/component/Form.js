import React from 'react';

class Donations extends React.Component{
    state = {
        recentDonations: [],
        value: 0,
        raised: 0,
        goal: 1000,
        remaining : 0
    }
    handleValue =(e)=>{
        this.setState({
            value: e.target.value
        })
    }
    handleGoal =()=>{
   
    }



    render(){
        console.log(this.state.value)
        const {value, raised, goal} = this.state
        return(
            <form>
                <h2>Raised ${raised} of ${goal}</h2>
                <label>
                Name:
                <input type='text' placeholder="Name"></input>
                </label>
                <label>
                Caption:
                <input type='text' placeholder="Caption"></input>
                </label>
                <label for="points">Amount to Donate</label>
                <input type="range" id="points" name="points" min="0" max="100" data-show-value ="true" onChange={this.handleValue}></input>
                <p>${value}</p>
            </form>
        )
    }
}

export default Donations