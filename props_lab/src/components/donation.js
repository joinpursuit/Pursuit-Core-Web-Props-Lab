import React, {Component} from 'react'
import TopBar from './topBar'
import Progress from './progress'
import Form from './form'
// import DonationReason from './DonationReason'

class Donation extends Component{

    render(){
        return(
            <div>
            <TopBar/>
            <Progress/>
            <Form/>
            {/* <DonationReason/> */}
            </div>
        )
    }
}

export default Donation; 