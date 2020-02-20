import React from 'react';
import DisplayDonor from './RecentDonors';
import Form from './Forms'

class Donations extends React.Component{
    state = {
        recentDonations: [],
        goal: 1000,
        raised: 0,
        remaining : 0
    }

    handleSubmit = (obj, e)=>{
        e.preventDefault();
        this.setState((prevState)=>({
            recentDonations: [...prevState.recentDonations, obj]
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
                    <div>
                        donations
                 {this.displayDonors()}
                    </div>
                    <Form handleSubmit={this.handleSubmit} goal={goal}/>
            </>
        )
    }
}

export default Donations;