import React from 'react'

class ProgressBar extends React.Component {
    render() {
        this.percent = parseInt((this.props.raised / this.props.goal) * 100)
        return (<>
            <h2 className="mb-4">
                Raised $ {this.props.raised} of <span className="text-muted">$ {this.props.goal}</span>
            </h2>
            <div className="progress">
                <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: `${this.percent}%` }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    {this.percent}%
                </div>
            </div>
        </>)
    }
}

export default ProgressBar;