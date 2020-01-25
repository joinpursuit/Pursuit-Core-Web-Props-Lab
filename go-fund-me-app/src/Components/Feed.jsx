import React from "react";

const Feed = props => {
  return (
    <div className="col-4 feed-box">
      <h3>Recent Donations</h3>
      <ul className="list-unstyled">
        {props.donations.reverse().map(ele => {
          return (
            <li key={ele.id} className="list-group-item text-center">
              <p className="donations-user">
                {ele.name} donated ${ele.donationAmount}
              </p>
              <p className="donations-message text-muted">{ele.message}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Feed;
