import React from "react";

const Feed = props => {
  return (
    <div>
      <h3>Recent Donations</h3>
      <ul>
        {props.donations.map(ele => {
          return (
            <li key={ele.id}>
              <p className="donations-user">
                {ele.name} donated ${ele.donationAmount}
              </p>
              <p className="donations-message">{ele.message}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Feed;
