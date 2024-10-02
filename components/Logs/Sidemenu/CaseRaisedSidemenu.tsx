import React from "react";
import { ButtonLabel, ButtonLabelAmber } from "../ButtonLabel";

const CaseRaisedSidemenu = () => {
  return (
    <div>
      <p className="text-interface-neutrals-700 font-semibold text-base">
        Retrieved from Amazon
      </p>
      <table className="text-sm font-semibold my-4 flex flex-col gap-4">
        <tr className="flex items-center gap-2">
          Order ID : <ButtonLabel text="729-3081594-6723901" />
        </tr>
        <tr className="flex items-center gap-2">
          #ASIN : <ButtonLabel text="B0CLMN3PQ7" />
        </tr>
        <tr className="flex items-center gap-2">
          #SKU : <ButtonLabel text="CAL18" />
        </tr>
        <tr className="flex items-center gap-2">
          Shipment ID : <ButtonLabel text="UCYdnWr1M" />
        </tr>
        <tr className="flex items-center gap-2">
          Item total : <ButtonLabel text="₹1,071.00" />
        </tr>
        <tr className="flex items-center gap-2">
          Amazon&apos;s Ship By : <ButtonLabel text="2024-09-21T23:11:09" />
        </tr>
        <tr className="flex items-center gap-2">
          Purchase date : <ButtonLabel text="2024-09-18T19:22:35" />
        </tr>
        <tr className="flex items-center gap-2">
          Dispute Type : <ButtonLabel text="Overcharge : Shipping" />
        </tr>
        <tr className="flex items-center gap-2">
          Status : <ButtonLabelAmber text="Case Raised" />
        </tr>
        <tr>Issue Description :</tr>
        <tr className="border p-2 rounded-md text-interface-neutrals-600 flex flex-col gap-4">
          <p>Issue: Investigate the Weight Handling Fees overcharged</p>
          <p>
            Inventory Discrepancy:- 1 unit SKU:- CAL18 Order ID:-
            729-3081594-6723901 Shipment ID:- UCYdnWr1M
          </p>
          <p>
            Kindly do look into the same, and issue a reimbursement for Fee
            correction.
          </p>
          <p>Looking forward to hearing back from you.</p>
        </tr>
      </table>
    </div>
  );
};

export default CaseRaisedSidemenu;
