import React from "react";

const DonationForm = ({
  name,
  caption,
  donation,
  donationList,
  handleChange,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" value={name} name="name" onChange={handleChange} />
      </label>

      <label>
        Caption
        <input
          type="text"
          value={caption}
          name="caption"
          onChange={handleChange}
        />
      </label>

      <lable>
        Amount to Donate
        <input
          type="range"
          value={donation}
          min="0"
          onChange={handleChange}
          name="donation"
        />
        {donation}
        <input type="submit" value="donate" />
      </lable>
    </form>
  );
};

export default DonationForm;
