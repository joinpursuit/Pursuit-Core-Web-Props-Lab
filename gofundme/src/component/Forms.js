import React from 'react';

class Form extends React.Component{
    state = {
        name: '',
        captions: '',
        value: 0
    }
    handleChange =(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        // console.log(this)
        const {value, caption} = this.state
        return(
            <form onSubmit={(e) => this.props.handleSubmit(this.state, e)}>
                <h2>Raised ${value} of ${this.props.goal} </h2>

                <label>
                Name:
                <input type='text' placeholder="Name" name={'name'} onChange={this.handleChange}></input>
                </label>
                <label>
                Caption:
                <input type='text' placeholder="Caption" name={'captions'} onChange={this.handleChange}></input>
                </label>
                <label className="points">Amount to Donate</label>
                <input type="range" id="points" name="points" min="0" max="100" data-show-value ="true" name={'value'} onChange={this.handleChange}></input>
                <p>${value}</p>

                    <input type='submit' ></input>
            </form>
        )
    }

}

export default Form

