import React from 'react'


const Form = (props) => {

    return (
        <form>
            <div className="form-group">
                <label>Name</label>
                <input
                    value={props.name}
                    onChange={props.handleChange}
                    name='name'
                    type="text"
                    className="form-control"
                    id="nameInput"
                    placeholder="John Doe"
                />
            </div>
            <div className="form-group">
                <label>Caption</label>
                <input
                    value={props.blurb}
                    onChange={props.handleChange}
                    type="text"
                    className="form-control"
                    id="captionInput"
                    placeholder="..."
                    name='blurb'
                />
            </div>
            <div className="form-group">
                <label>Amount to Donate</label>
                <input
                    value={props.amount}
                    onChange={props.handleChange}
                    type="range"
                    className="custom-range"
                    id="amountInput"
                    min="5"
                    max="10000"
                    name='amount'
                />
                <blockquote className="blockquote text-right">
                    <p className="h3 mb-0" onChange={props.handleChange}>$ {props.amount}</p>
                    <button
                        type="button"
                        className="btn btn-lg btn-success my-4"
                        onClick={props.handleNewDonation}
                    >
                        Donate
                    </button>
                </blockquote>
            </div>
        </form>
    )
}

export default Form;