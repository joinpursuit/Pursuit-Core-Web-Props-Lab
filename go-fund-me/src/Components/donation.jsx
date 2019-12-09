import React from 'react'

const Donation = (props) => {
  return(
    <li className='donation'> {props.name} donated ${props.amount}
    <p className='comment'>{props.caption}</p>
  </li>
  )
}
export default Donation;