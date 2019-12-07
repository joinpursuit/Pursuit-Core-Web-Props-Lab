import React from 'react'

const TopBar = (props) => {
    return (
        <section className="jumbotron text-center">
            <h1 className="jumbotron-heading">GoFundMeeSeek</h1>
            <p className="lead text-muted">
                {props.motivation}
            </p>
        </section>
    )
}

export default TopBar