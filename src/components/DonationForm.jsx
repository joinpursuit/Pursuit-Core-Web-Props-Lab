/*
Joseph P. Pasaoa
Donation Form Component | Go Fund Me Lab
*/


/* IMPORTS */
import React from 'react';
import './DonationForm.css';


/* MAIN */
const DonationForm = (props) => {
  return (
    <section id="form">
      <h2>Make a Donation</h2>
      <form id="formDonate" onSubmit={props.handleSubmit}>
        <label htmlFor="nameValue">Name</label>
        <input 
          type="text" 
          id="nameValue" 
          name="nameValue" 
          onChange={props.handleChange} 
          value={props.nameValue} 
          placeholder="Jane Doe" 
        />
        <label htmlFor="msgValue">Message</label>
        <input 
          type="text" 
          id="msgValue" 
          name="msgValue" 
          onChange={props.handleChange} 
          value={props.msgValue} 
          placeholder="What would you like to tell Alejo?" 
        />
        <label htmlFor="amountValue">Amount to donate: {props.amountValue}</label>
        <input 
          type="range" 
          id="amountValue" 
          name="amountValue" 
          min="1" 
          max="1000" 
          step="1" 
          onChange={props.handleChange} 
          value={props.amountValue} 
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}


/* EXPORT */
export default DonationForm;
