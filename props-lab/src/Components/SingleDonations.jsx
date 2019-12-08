import React from "react"

const SingleDonations = (props) =>{

    return (
        <li>
           <div>
               <h5>{props.name} donated ${props.donationAmount}

               </h5>
             {props.message} 
           </div>

        </li>
    )
}



export default SingleDonations




// import React from "react"

// const Progress = (props) =>{

//     return (
//         <li>
//            <div>
//                <h5>{props.totalDonated} donated ${props.donatedAmountNeeded}

//                </h5>
//            </div>

//         </li>
//     )
// }



// export default Progress





