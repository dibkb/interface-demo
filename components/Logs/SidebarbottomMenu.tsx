import React from "react";
import MarketplaceButton from "./MarketplaceButton";
import Profile from "../icons/Profile";
import Bell from "../icons/Bell";
import Logout from "../icons/Logout";

const SidebarbottomMenu = () => {
  return (
    <div className="flex-grow flex flex-col justify-end gap-2 p-6">
      <MarketplaceButton text={"My account"} icon={<Profile />} />
      <MarketplaceButton text={"Notifications"} icon={<Bell />} />
      <MarketplaceButton text={"Logout"} icon={<Logout />} />
    </div>
  );
};

export default SidebarbottomMenu;
