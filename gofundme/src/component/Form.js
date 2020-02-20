import React from 'react';
import DisplayDonor from './RecentDonors';

class Donations extends React.Component{
    state = {
        recentDonations: [{
            name: 'Henry',
            captions: '',
            value: 0,
        }],
        goal: 1000,
        raised: 0,
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


    handleSubmit = (e)=>{
        e.preventDefault();
        this.setState((prevState)=>({
            recentDonations: [...prevState.recentDonations,{
                name: this.state.name,
                captions: this.state.captions,
                value: this.state.value
            }]
        })
        )
    }

    displayDonors = () =>{
        return this.state.recentDonations.map((donor, i)=>{
            return(
                <DisplayDonor key={i}
                name={donor.name}
                caption={donor.captions}
                value={donor.value}/>
            )
        })
    }

    render(){
        console.log(this.state.recentDonations)
        const {value, goal} = this.state
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <h2>Raised ${value} of ${goal}</h2>

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
                    <div>
                        donations
                 {this.displayDonors()}
                    </div>
            </>
        )
    }
}

export default Donations;