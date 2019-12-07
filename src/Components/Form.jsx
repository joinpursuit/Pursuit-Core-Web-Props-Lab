import React from 'react'

class Form extends React.Component {
    render() {
        let {
            sliderValue, 
            goal,
            name, 
            message, 
            submitForm, 
            handleInput, 
        } = this.props

        return(
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" id="nameInput" placeholder="Full Name Here" value={name} onChange={handleInput} required/>
                </div>
                <div className="form-group">
                    <label>Caption</label>
                    <input type="text" className="form-control" id="captionInput" placeholder="Write your message here..." value={message} onChange={handleInput} required/>
                </div>
                <div className="form-group">
                    <label>Amount to Donate</label>
                    <input type="range" className="custom-range" id="amountInput" min="1" max={goal} value={sliderValue} onChange={handleInput}/>
                    <blockquote className="blockquote text-right">
                        <p className="h3 mb-0">$ {sliderValue}</p>
                        <button type="submit" className="btn btn-lg btn-success my-4">Donate</button>
                    </blockquote>
                </div>
            </form>
        )
    }
}

export default Form