"use client";
import React from "react";
import MarketplaceButton from "./MarketplaceButton";
import Profile from "../icons/Profile";
import Bell from "../icons/Bell";
import Logout from "../icons/Logout";
import { extractActivepath } from "@/utils/extract-active";
import { usePathname } from "next/navigation";

const SidebarbottomMenu = () => {
  const pathname = usePathname();
  const activeTab = extractActivepath(pathname);
  return (
    <div className="flex-grow flex flex-col justify-end gap-2 p-6">
      <MarketplaceButton
        text={"My account"}
        icon={<Profile />}
        href="/home/account"
        active={activeTab === "account"}
      />
      <MarketplaceButton
        text={"Notifications"}
        icon={<Bell />}
        href="/home/notifications"
        active={activeTab === "notifications"}
      />
      <MarketplaceButton
        text={"Logout"}
        icon={<Logout />}
        href="logout"
        active={false}
      />
    </div>
  );
};

export default SidebarbottomMenu;
