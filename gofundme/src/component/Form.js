import React from 'react';

class Donations extends React.Component{
    state = {
        name: '',
        captions: '',
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
    handleName =(e)=>{
        this.setState({
            name: e.target.value,
        })
    }
    handleCaption =(e)=>{
        this.setState({
            captions: e.target.value
        })
    }

    handleButton = (e)=>{
        e.preventDefault();
        this.setState({
            recentDonations: [{
                name: this.state.name,
                captions: this.state.captions,
                amount: this.state.value
            }]
        })
    }



    render(){
        console.log(this.state.recentDonations)
        const {value, raised, goal} = this.state
        return(
            <form onSubmit={this.handleButton}>
                <h2>Raised ${raised} of ${goal}</h2>

                <label>
                Name:
                <input type='text' placeholder="Name" onChange={this.handleName}></input>
                </label>
                <label>
                Caption:
                <input type='text' placeholder="Caption" onChange={this.handleCaption}></input>
                </label>
                <label className="points">Amount to Donate</label>
                <input type="range" id="points" name="points" min="0" max="100" data-show-value ="true" onChange={this.handleValue}></input>
                <p>${value}</p>

                    <input type='submit' ></input>
            </form>
        )
    }
}

export default Donations;