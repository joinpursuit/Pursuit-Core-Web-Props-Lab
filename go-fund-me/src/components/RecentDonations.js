import React from 'react';
import DonationDisplay from './DonationDisplay';

class Donations extends React.Component{
    state = { donations: [ 
        {
            name: "Jo",
            amount: "251",
            caption: "Yerrrrr"
        },
        {
            name: "Sam",
            amount: "1000",
            caption: "Yerrrrr"
        }
        
    ]

    }

    render(){
        console.log(this.state.donations)
        
            let donations = this.state.donations.map((donation, i) => {
                return <DonationDisplay key={donation.name}
                        name={donation.name}
                        amount={donation.amount}
                        caption={donation.caption}
                 />
            })
        

        return(
            <>
            <div>
                {donations}
            </div>
            </>
        )
        
    }
}

export default Donations;