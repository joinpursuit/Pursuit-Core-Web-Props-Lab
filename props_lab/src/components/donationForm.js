import React from 'react';

class DonationForm extends React.Component {
    
    handleNameChange = () => {

    }
    
    render() {
        return(
            <div className={"donationFormContainer"}>
                <form>
                    <input type={"text"} value="" onChange={this.handleNameChange()}></input>
                </form>
            </div>
        )
    }
}

export default DonationForm;