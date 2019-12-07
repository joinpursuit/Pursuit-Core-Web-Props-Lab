import React from 'react';

const DonatorList = (props) => {
    const handleChange = () => {
        // console.log(props.name)
        let itemName = props.name;
        props.handleNewDonation(itemName)
    }

    return (
        <li onChange={handleChange}>
            {props.name} - {props.caption} - ${props.amountDonated}
        </li>
    )
}

export default DonatorList;