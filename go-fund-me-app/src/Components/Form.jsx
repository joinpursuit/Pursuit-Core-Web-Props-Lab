import React from 'react';

const Form = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleInputChange = (event) => {
        const id = event.target.id;
        const value = event.target.value
        props.handleInput(id, value)
    }

    const handleAddDonation = () => {
        props.submitForm()
    }

    return (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor='nameInput'>Name</label>
            <input type="text" className="form-control" id="nameInput" value={props.name} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label htmlFor='captionInput'>Caption</label>
            <input type="text" className="form-control" id="captionInput" value={props.caption} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label htmlFor='amountInput'>Amount to Donate</label>
            <input type="range" className="custom-range" id="amountInput" min="5" max="1000" value={props.amount} onChange={handleInputChange} />
            <blockquote className="blockquote text-right">
              <p className="h3 mb-0">$ {props.amount}</p>
              <button type="button" className="btn btn-lg btn-success my-4" onClick={handleAddDonation}>Donate</button>
            </blockquote>
          </div>
        </form>
    )
}

export default Form;