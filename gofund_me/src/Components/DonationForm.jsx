import React from 'react';

const DonationForm = (props) => {
    console.log('props', props)
    return (
        <div className='donation-form'>
            < form onSubmit = {
                props.handleFormSubmit
            } >
                <label htmlFor='name'>
                    Name
                </label>
                    <br></br>
                <input className='input-one' type='text' placeholder='John Doe' value={props.nameEntry} onChange={props.handleNameEntry}></input>
                    <br></br>
                <label htmlFor='caption'>
                    Caption
                </label>
                    <br></br>
                <input className='input-two' type='text' placeholder='...' value={props.captionEntry} onChange={props.handleCaptionEntry}></input> 
                    <br></br>
                <label htmlFor='amount'>
                    Amount to Donate
                </label>
                    <br></br>
                <input className='range' type='range' min='1' max='1000' value={props.range} onChange={props.handleDonationRange}></input>
                   <br></br>
                <p className='range-amt'>${props.range}</p>
                <button>Donate</button>
            </form>

        </div>
    )
}

export default DonationForm;
