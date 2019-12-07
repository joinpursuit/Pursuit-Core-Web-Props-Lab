import React from 'react';

const Donations = (props) => {
        return(
            <form>
                <input type="text" value={props.name} placeholder="Name" onChange={props.changeName}></input>
                <input type="text" value={props.caption} placeholder="Caption" onChange={props.changeCap}></input>
                <input type="range" value={props.amount} min="5" max="1000" onChange={props.changeAmount}></input>
                <p>${props.amount}</p>
                <button onClick={props.addDonation}>Donate</button>
            </form>
        )
    }


export default Donations;