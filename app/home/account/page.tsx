"use client";
import { BillingAddress } from "@/components/accounts/BillingAddress";
import BillingCard from "@/components/accounts/BillingCard";
import { cn } from "@/lib/utils";
import { useState } from "react";

const tabs = [
  { index: 1, name: "settings" },
  { index: 2, name: "billing" },
];
const AccountPage = () => {
  const [selected, setSelected] = useState<number>(1);
  return (
    <main className="p-4 h-full flex flex-col gap-6 border">
      <div className="flex gap-4">
        {tabs.map((ele) => {
          return (
            <button
              onClick={() => setSelected(ele.index)}
              key={ele.index}
              className={cn(
                "capitalize text-lg font-semibold text-interface-neutrals-400 pb-[2px] border-b-2 border-transparent",
                selected === ele.index &&
                  "text-interface-palette-secondary border-b-2 border-interface-palette-secondary"
              )}
            >
              {ele.name}
            </button>
          );
        })}
      </div>
      <BillingCard />
      <BillingAddress />
    </main>
  );
};
export default AccountPage;
