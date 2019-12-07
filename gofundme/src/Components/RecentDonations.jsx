import React from 'react';
import DonatorList from './DonatorList'

class RecentDonations extends React.Component {
    constructor() {
        super()
        this.initialState = {
            recentDonations: [
                { name: 'Janelly', caption: 'I did it', amountDonated: 40 },
                { name: 'Kamla', caption: 'Yep', amountDonated: 50 },
                { name: 'Xaiver', caption: 'On it', amountDonated: 40 },
                { name: 'Kay', caption: 'Beach Money', amountDonated: 20 }
            ],
            raisedAmount: 0,
            goalAmount: 0,
        }
        this.state = this.initialState
    }

    handleNewDonation = () => {
        const { recentDonations } = this.state;

        let newDonations = recentDonations.map(donater => {
            if (donater.amountDonated > 5) {
                return {
                    name: donater.name,
                    caption: donater.caption,
                    amountDonated: donater.amountDonated
                };
            } else {
                return donater;
            }
        });

        console.log('old', recentDonations)
        console.log('new', newDonations)
        this.setState({
            recentDonations: newDonations
        })
    }

    render() {
        let { recentDonations, raisedAmount, goalAmount } = this.state

        const listDonations = recentDonations.map((donater) => {
            return (
                <DonatorList
                    key={donater.name}
                    name={donater.name}
                    caption={donater.caption}
                    amountDonated={donater.amountDonated}
                    handleNewDonation={this.handleNewDonation}
                />

            )
        })

        return <ul class="col-4 list-unstyled recent-donations">
            <h3 class='my-4'>Recent Donations</h3>
            {listDonations}
            {/* <li class="media my-2">
                <div class="media-body">
                    <h5 class="mt-0 mb-1">Janelly donated $ 50</h5>
                    Let's all give to this great cause!
          </div>
            </li>
            <li class="media my-2">
                <div class="media-body">
                    <h5 class="mt-0 mb-1">Xaiver donated $ 50</h5>
                    Let's all give to this great cause!
          </div>
            </li>
            <li class="media my-2">
                <div class="media-body">
                    <h5 class="mt-0 mb-1">Kamla donated $ 50</h5>
                    Let's all give to this great cause!
          </div>
            </li> */}
        </ul>
    }
}

export default RecentDonations;