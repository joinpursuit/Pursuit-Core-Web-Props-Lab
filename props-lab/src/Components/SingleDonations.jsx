import React from "react"

const SingleDonations = (props) =>{

    return (
        <li>
           <div>
               <h5>{props.name} donated ${props.donationAmout}

               </h5>
             {props.message} 
           </div>

        </li>
    )
}



export default SingleDonations