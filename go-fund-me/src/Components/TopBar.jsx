import React from 'react';

class TopBar extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="top-bar">
            <h1>Go Fund Me</h1>
            <p>Help me go on vacation to a beach somewhere</p>
            </div>
        )
    }
}

export default TopBar;