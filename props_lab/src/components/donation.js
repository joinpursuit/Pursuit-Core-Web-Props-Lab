import React, {Component} from 'react'
import TopBar from './topBar'
import Progress from './progress'
import Form from './form'

class Donation extends Component{

    render(){
        return(
            <div>
            <TopBar/>
            <Progress/>
            <Form/>
            </div>
        )
    }
}

export default Donation; 