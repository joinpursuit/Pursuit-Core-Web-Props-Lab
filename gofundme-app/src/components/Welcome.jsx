import React from 'react';


class Welcome extends React.Component {
    render(){
        console.log('wtf')
        return (
            <div className = 'topBar'>
                <h1>GoFundMe</h1>
                <p>Help me get out of debt</p>
            </div>
        )
    }
}

export default Welcome;