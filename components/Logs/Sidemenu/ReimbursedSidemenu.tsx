import React from "react";
import { ButtonLabel } from "../ButtonLabel";
import ReimbursedLabel from "./ReimbursedItems/ReimbursedLabel";

const ReimbursedSidemenu = () => {
  return (
    <div>
      <p className="text-interface-neutrals-700 font-semibold text-base">
        Retrieved from Amazon
      </p>
      <table className="text-sm font-semibold my-4 flex flex-col gap-4">
        <tr className="flex items-center gap-2">
          FNSKU : <ButtonLabel text="729-3081594-6723901" />
        </tr>
        <tr className="flex items-center gap-2">
          ASIN : <ButtonLabel text="B0CLMN3PQ7" />
        </tr>
        <tr className="flex items-center gap-2">
          Fulfilment Centre : <ButtonLabel text="CAL18" />
        </tr>
        <tr className="flex items-center gap-2">
          Item total : <ButtonLabel text="UCYdnWr1M" />
        </tr>
        <tr className="flex items-center gap-2">
          Dispute Type : <ButtonLabel text="₹1,071.00" />
        </tr>
        <tr className="flex items-center gap-2">
          Status : <ReimbursedLabel>Partially reimbursed</ReimbursedLabel>
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
        <tr>Issue Description :</tr>
        <tr className="border rounded-md bg-interface-neutrals-500 h-[300px]"></tr>
      </table>
    </div>
  );
};

export default ReimbursedSidemenu;
