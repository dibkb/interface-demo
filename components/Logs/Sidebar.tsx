"use client";
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
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname.split("/").pop());
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
        <MarketplaceButton
          icon={<Dashboard />}
          text="Dashboard"
          href="/home/dashboard"
        />
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
        <MarketplaceButton
          icon={<Amazon />}
          text="Amazon"
          href="/home/amazon"
        />
        <MarketplaceButton
          icon={<Flipkart />}
          text="Flipkart"
          href="/home/flipkart"
        />
        <MarketplaceButton
          icon={<Swiggy />}
          text="Swiggy Instamart"
          href="/home/swiggy-instamart"
        />
        <MarketplaceButton icon={<Zepto />} text="Zepto" href="/home/zepto" />
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
