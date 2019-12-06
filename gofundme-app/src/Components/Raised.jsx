import React from "react";

const Raised = (props) => {
    const {total, percent, target} = props
  return (
    <>
      <h2 className="mb-4">
        Raised $ {total} of <span className="text-muted">$ {target}</span>
      </h2>
      <div className="progress">
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: percent }}
          aria-valuenow={percent}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {percent}%
        </div>
      </div>
    </>
  );
};

export default Raised;
