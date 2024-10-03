import React from "react";
import CardLayout from "./CardLayout";

import SmallButton from "./SmallButton";

const BillingCard = () => {
  return (
    <CardLayout
      text="Billing Address"
      asideNode={<SmallButton text={"Edit"} />}
    >
      <section className="flex">
        <div className="flex flex-col gap-6 min-w-80 bg-interface-base-white px-6 py-4 border rounded-md">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm">Home</h3>
            <span className="text-xs font-semibold text-[#14A341] border border-[#14A341] bg-[#CBEDD6] rounded-md px-4 py-1">
              Default
            </span>
          </div>
          <p className="font-semibold text-interface-neutrals-600">
            9th Main Rd, JC Nagar,
            <br /> Basaweshwara Nagar,
            <br /> Bengaluru, Karnataka
            <br /> 560086
          </p>
        </div>
      </section>
    </CardLayout>
  );
};

export default BillingCard;
