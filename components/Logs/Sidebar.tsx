import React from "react";
import { manrope } from "../fonts";
import { cn } from "@/lib/utils";
import MarketplaceButton from "./MarketplaceButton";
import Dashboard from "../icons/Dashboard";
import Amazon from "../icons/Amazon";
import Flipkart from "../icons/Flipkart";
import Swiggy from "../icons/Swiggy";
import Zepto from "../icons/Zepto";
import Plus from "../icons/Plus";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-2 p-6 border-b">
      <div className="flex flex-col gap-4">
        <p
          className={cn(
            manrope.className,
            "text-sm text-interface-base-black font-bold"
          )}
        >
          Overview
        </p>
        <MarketplaceButton icon={<Dashboard />} text="Dashboard" />
      </div>
      <div className="flex flex-col gap-4">
        <p
          className={cn(
            manrope.className,
            "text-sm text-interface-base-black font-bold"
          )}
        >
          Marketplaces
        </p>
        <MarketplaceButton icon={<Amazon />} text="Amazon" />
        <MarketplaceButton icon={<Flipkart />} text="Flipkart" />
        <MarketplaceButton icon={<Swiggy />} text="Swiggy Instamart" />
        <MarketplaceButton icon={<Zepto />} text="Zepto" />
        <div className="flex gap-2 px-2 py-2 rounded-md border border-dashed">
          <Plus />
          <p className="font-semibold text-interface-base-black">
            {"Add Marketplace"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
