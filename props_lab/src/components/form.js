import React from 'react'

const Form = () => {
    return(
        <div>
    <form className="dontationForm">
        <div>
        Name: <input className="name" placeholder="Full Name"/>
        </div>
        <div>
        Caption: <input className="caption" placeholder="..."/>
        </div>
        <div>
        Amount to Donate: <input type="range" className="donationAmount" mins="5" max="1000"/>
        <blockquote className="blockquote">
            <p className="amount"> $ 5 </p>
            <button className="button">Donate</button>
        </blockquote>
        </div>
        
    
    </form>
    </div>
    )
}


export default Form;