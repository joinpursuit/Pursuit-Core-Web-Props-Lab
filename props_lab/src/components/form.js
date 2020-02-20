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
    
    </form>
    </div>
    )
}


export default Form;