import React from 'react';

const TopBar = (props) => {
    // console.log('props', props)
    return (
        <div className='top-bar'>
            <h1>{props.title}</h1>
            <p className='heading'>{props.statement}</p>
       </div>
    )

}

export default TopBar;