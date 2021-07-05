import React from 'react'

class Donations extends React.Component{
state={
    donations:[
        {prevDonation:[],
        name:"Ben",
        amount:10,
        caption:"Good Job"},
        {prevDonation:[],
            name:"Sue",
            amount:40,
            caption:"Keep "}
    ]
}
handleDonations=(props)=>{
    
}
render(){
   console.log(this.state.donations)
   return (
       <div></div>
   )
}
}

export default Donations;
