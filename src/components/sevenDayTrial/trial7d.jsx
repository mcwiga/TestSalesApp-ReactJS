import React, { Component } from "react";

class trial7d extends Component {
  handleBtnFreeTrial() {
    console.log("Handle Button");
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleBtnFreeTrial}
          className="btn-tutushare btn-sm"
        >
          Free 7 Day Trial
        </button>
      </div>
    );
  }
}

export default trial7d;
