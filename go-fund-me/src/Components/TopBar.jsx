import React from 'react';
import './TopBar.css'
const TopBar = () => {
    return (
        <div className='header'>
            <div className='header-text'>
                <h1>GO FUND <div id='me'>ME</div></h1>
                <p>Help me go on a vacation somewhere</p>
            </div>
        </div>
    )
}

export default TopBar;