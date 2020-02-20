import React from 'react'

class DonationsForm extends React.Component {
  state = {
    name: "",
    caption: "",
    donators: []
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
  }
  render() {
    let {name, caption} = this.state
    return(
  <div className='col-8'>
      <h2 className='mb-4'>Raised $ 300 of <span className='text-muted'>$ 5000</span></h2>
      <div className="progress">
        <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25"
          aria-valuemin="0" aria-valuemax="100">25%</div>
      </div>
      <hr />

      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input value={name} onChange={this.handleChange} name="name" type="text" className="form-control" id="nameInput" placeholder="John Doe" />
        </div>
        <div className="form-group">
          <label>Caption</label>
          <input value= {caption} onChange={this.handleChange} name="caption" type="text" className="form-control" id="captionInput" placeholder="..." />
        </div>
        <div className="form-group">
          <label>Amount to Donate</label>
          <input type="range" className="custom-range" id="amountInput" min="5" max="1000" />
          <blockquote className="blockquote text-right">
            <p className="h3 mb-0">$ 5</p>
            <button type="button" className="btn btn-lg btn-success my-4">Donate</button>
          </blockquote>
        </div>
      </form>


    </div>
    )

  }
  
  
 
}

export default DonationsForm;