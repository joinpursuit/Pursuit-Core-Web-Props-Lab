import React from 'react'

const Form =()=> {

        return (
            <form>
            <label>Name</label>
            <input placeholder="Your Name"/>
            <label>Caption</label>
            <input placeholder="..."/>
            <label>Amount to Donate</label>
            <input type="range" min="5" max="100"/>

                
            </form>
        )
    }

export default Form
