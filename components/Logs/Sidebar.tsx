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
import { extractActivepath } from "@/utils/extract-active";

const Sidebar = () => {
  const pathname = usePathname();
  const activeTab = extractActivepath(pathname);
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
          active={activeTab === "dashboard"}
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
          active={activeTab === "amazon"}
        />
        <MarketplaceButton
          icon={<Flipkart />}
          text="Flipkart"
          href="/home/flipkart"
          active={activeTab === "flipkart"}
        />
        <MarketplaceButton
          icon={<Swiggy />}
          text="Swiggy Instamart"
          href="/home/swiggy-instamart"
          active={activeTab === "swiggy-instamart"}
        />
        <MarketplaceButton
          icon={<Zepto />}
          text="Zepto"
          href="/home/zepto"
          active={activeTab === "zepto"}
        />
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
