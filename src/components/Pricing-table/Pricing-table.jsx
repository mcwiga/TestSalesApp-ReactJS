import React from "react";
import { PricingTable, PricingSlot, PricingDetail } from "react-pricing-table";

class Pricing_table extends React.Component {
  render() {
    return (
      <PricingTable highlightColor="#f45336">
        <PricingSlot
          onClick={() => this.props.onClick()}
          buttonText="TRY IT FREE"
          title="FREE"
          priceText="$0/month"
        >
          <PricingDetail>
            {" "}
            <b>15</b> projects
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>5 GB</b> storage
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>5</b> users
          </PricingDetail>
          <PricingDetail strikethrough>
            {" "}
            <b>Time tracking</b>
          </PricingDetail>
        </PricingSlot>
      </PricingTable>
    );
  }
}
export default Pricing_table;
