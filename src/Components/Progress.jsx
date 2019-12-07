import React from 'react'

class Progress extends React.Component {
    render() {
        let {totalRaised, goal} = this.props
        let totalRaisedPercentage = totalRaised / goal * 100

        return(<>
            <h2 className='mb-4'>Raised $ {totalRaised} of <span className='text-muted'>$ {goal}</span></h2>
            <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{width: `${totalRaisedPercentage}%`,}} aria-valuenow={totalRaisedPercentage}
                    aria-valuemin="0" aria-valuemax="100">{totalRaisedPercentage}%</div>
            </div>
            <hr />
        </>)
    }
}

export default Progress