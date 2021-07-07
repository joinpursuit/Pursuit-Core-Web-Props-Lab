import React, {useState} from 'react';
import Donations from './Components/Donations';
import Progress from './Components/Progress';
import Form from './Components/Form';

const App = () => {
    let [donations, setDonations] = useState(
        [
            {
                donor: 'John', 
                amount: 50, 
                message: "Let's all give to this great cause!",
            },
            {
                donor: 'Jane', 
                amount: 66, 
                message: "Tis the season to be donating",
            },
            {
                donor: 'Jack Ma', 
                amount: 34, 
                message: "Arribaba ee bettrer dan amaszhon",
            },
        ]
    )
    
    let [currentFormUser, setCurrentFormUser] = useState(
        {
            donor: '',
            amount: 5,
            message: '',
        }
    )

    const totalRaised = () => donations.reduce((t, d) => t += 1 * d.amount, 0)
    const GOAL = 1000000

    const handleInput = ({target: {value, id}}) => {
        setCurrentFormUser({
            donor: id === 'nameInput' ? value : currentFormUser.donor,
            amount: id === 'amountInput' ? value : currentFormUser.amount,
            message: id === 'captionInput' ? value : currentFormUser.message,
        })
    }

    const submitForm = (event) => {
        event.preventDefault()
        
        setDonations(donations.concat([currentFormUser]))
        setCurrentFormUser({
            donor: '',
            amount: 5,
            message: '',
        })
    }

    return (
        <div className="App">
            <div className='container'>
                <div className='row'>
                    <Donations donations={donations}/>
                    <div className='col-8'>
                        <Progress 
                            goal={GOAL}
                            totalRaised={totalRaised()}
                        />
                        <Form 
                            goal={GOAL}
                            name={currentFormUser.donor}
                            message={currentFormUser.message}
                            submitForm={submitForm}
                            sliderValue={currentFormUser.amount}
                            handleInput={handleInput}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
