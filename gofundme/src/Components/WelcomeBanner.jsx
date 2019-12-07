import React from 'react';

class WelcomeBanner extends React.Component {
    render() {

        return <section className="jumbotron text-center">
            <h1 className="jumbotron-heading">Go Fund Me</h1>
            <p className="lead text-muted">Help me go on a vacation to a beach somewhere</p>
        </section>
    }
}

export default WelcomeBanner;
