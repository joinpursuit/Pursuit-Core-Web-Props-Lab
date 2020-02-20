import React from 'react'

const DonationsDisplay = (props) => {
  
    return (
        <ul className="col-4 list-unstyled recent-donations">
        <h5 className='my-4'>Recent Donations</h5>
        
        <li className="media my-2">
          <div className="media-body">
            
            <h5 className="mt-0 mb-1">John donated $ 50</h5>
            Let's all give to this great cause!
          </div>
        </li>
        <li className="media my-2">
          <div className="media-body">
            <h5 className="mt-0 mb-1">John donated $ 50</h5>
            Let's all give to this great cause!
          </div>
        </li>
        <li className="media my-2">
          <div className="media-body">
            <h5 className="mt-0 mb-1">John donated $ 50</h5>
            Let's all give to this great cause!
          </div>
        </li>
      </ul>
    )
}

export default DonationsDisplay;