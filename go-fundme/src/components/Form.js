import React from 'react';

const Form = ({handleSubmit, handleSlider, formAmount}) => {  

        return(
            <form onSubmit={handleSubmit}>
            <label>
            Name
            <input type="text"/>
            </label>
            <br/>
            <label>
            Caption
            <input type="text"/>
            </label>
            <br/>
            <label>
            Amount to Donate
            <input type="range" min="0" max ="1000" step="5" onChange={handleSlider}/>
            <p>{formAmount}</p>
            </label>
            <br/>
            <input type="submit" value="Donate"/>
            </form>
        )

}

export default Form;