import React from 'react';

const DonationForm = (props) => {
  return (
    <div className='donation-form section'>
      <form onSubmit={props.handleFormSubmit}>
        <label htmlFor='name'>Name: </label>
        <input
          id='name'
          name='name'
          type='text'
          onChange={props.nameInput}
          value={props.donorName}
        />

        <label htmlFor='caption'>Caption: </label>
        <input
          id='caption'
          name='caption'
          type='text'
          onChange={props.messageInput}
          value={props.message}
        />

        <label htmlFor='amount'>Amount: </label>
        <input
          id='amount'
          name='amount'
          type='range'
          min="0"
          max="1000"
          onChange={props.customRangeFunct}
          value={props.donationAmount}
        />
        <span>{props.donationAmount}</span>

        <button>Donate</button>
      </form>
    </div>
  )
}

export default DonationForm;