import React, { Component } from "react";
import ContactForm from "./../contactForm";
import TrialModel from "./sevenDayModal";

class Trial7d extends Component {
  handleBtnFreeTrial() {
    console.log("Handle Button");
  }

  openModel() {
    console.log("Button Clicked");
  }

  render() {
    return (
      <div>
        <button onClick={this.openModel} className="btn-tutushare btn-sm">
          Free 7 Day Trial
        </button>
        <TrialModel>
          <ContactForm></ContactForm>
        </TrialModel>
      </div>
    );
  }
}

export default Trial7d;
