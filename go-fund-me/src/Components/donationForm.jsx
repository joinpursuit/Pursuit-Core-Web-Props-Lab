import React from 'react';

const DonationForm = (props) => {
    return (

        <div id='donation-stage' >
            <form className='donation-form' onSubmit={props.handleSubmit}>
                <p className='label' htmlFor='name'>Name <br></br>
                    <input type='text'
                        placeholder='John Doe'
                        onChange={props.handleDonorName}
                        id='input-name'
                        value={props.donorName} />
                </p>
                <br></br>
                <p className='label' htmlFor='caption'>Caption <br></br>
                    <input
                        type='text'
                        placeholder = '...'
                        onChange={props.handleDonorCaption}
                        id='input-caption'
                        value={props.donorCaption} />
                </p>
                <br></br>

                <input
                    id='slider'
                    type="range"
                    min="5"
                    max="1000"
                    onChange={props.changeDonatedAmount}
                    value={props.donatedAmount} />

                <br></br>
                <p>${props.donatedAmount}</p>
                <button>Donate</button>
            </form>
        </div>
    )
}

export default DonationForm;
