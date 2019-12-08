import React from 'react';

const DonationForm = (props) => {

    return (
        <div className='donation-form section'>
            <form onSubmit={props.handleSubmit}>
                <label htmlFor='name'>Name: </label>
                <input
                    id='name'
                    name='name'
                    type='text'
                    onChange={props.handleName}
                    value={props.name}
                />

                <label htmlFor='caption'>Caption: </label>
                <input
                    id='caption'
                    name='caption'
                    type='text'
                    onChange={props.handleCaption}
                    value={props.caption}
                />

                <label htmlFor='amount'>Amount: </label>
                <input
                    id='amount'
                    name='amount'
                    type='range'
                    min="0"
                    max="1000"
                    onChange={props.handleDonationAmount}
                    value={props.donationAmount}
                />
                <span>{props.donationAmount}</span>

                <button>Donate</button>
            </form>
        </div>
    )
}
export default DonationForm;
