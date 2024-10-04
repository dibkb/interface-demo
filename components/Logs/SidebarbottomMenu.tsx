import React from "react";
import MarketplaceButton from "./MarketplaceButton";
import Profile from "../icons/Profile";
import Bell from "../icons/Bell";
import Logout from "../icons/Logout";

const SidebarbottomMenu = () => {
  return (
    <div className="flex-grow flex flex-col justify-end gap-2 p-6">
      <MarketplaceButton
        text={"My account"}
        icon={<Profile />}
        href="/home/account"
      />
      <MarketplaceButton
        text={"Notifications"}
        icon={<Bell />}
        href="/home/notifications"
      />
      <MarketplaceButton text={"Logout"} icon={<Logout />} href="/logout" />
    </div>
  );
};

export default SidebarbottomMenu;
