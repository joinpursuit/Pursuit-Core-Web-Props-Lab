import React, { Component } from "react";

class Progress extends Component {
  state = {
    progress: 50
  }
  render() {
    return (
      <div>
        <h1> Raised $ {this.state.progress} of <span className="total"> $5,000.00 </span> </h1>
      </div>
    )
  }

}

export default Progress