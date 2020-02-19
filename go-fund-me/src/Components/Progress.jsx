import React from 'react';

class Progress extends React.Component {
    render() {
        return (
            <div>
                <h2>Raised $ {this.props.donatedTotal} of $ {this.props.donationGoal}</h2>
                <p>{this.props.donatedTotalPercent}% of total raised!</p>
            </div>
        )
    }
}


export default Progress