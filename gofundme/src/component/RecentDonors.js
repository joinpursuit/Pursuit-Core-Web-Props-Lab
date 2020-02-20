import React from 'react';


const DisplayDonor = ({name, caption, value}) =>{
    return (
    <div>
    <h3>Recent Donors</h3>
    <h3>{name} donated{value}</h3>
    <p>{caption}</p>
    </div>
    )
}

export default DisplayDonor;