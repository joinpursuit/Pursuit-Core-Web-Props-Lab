import React from 'react'

const Donations = (props) => {
    let {donations} = props

    return(
        <ul className="col-4 list-unstyled recent-donations">
            <h5 className='my-4'>Recent Donations</h5>
            {donations.map(d => {
                return (
                    <li className="media my-2" key={donations.indexOf(d)}>
                        <div className="media-body">
                            <h5 className="mt-0 mb-1">{d.donor + ' donated $' + d.amount}</h5>
                            {d.message}
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default Donations