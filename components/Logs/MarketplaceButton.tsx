import React from "react";

interface MarketplaceButtonProps {
  text: string;
  icon: React.ReactElement;
}
const MarketplaceButton = ({ text, icon }: MarketplaceButtonProps) => {
  return (
    <div className="flex gap-2 px-2 py-2 items-center  rounded-md hover:bg-interface-palette-secondary cursor-pointer">
      {icon}
      <p className="font-semibold text-interface-base-black">{text}</p>
    </div>
  );
};

export default MarketplaceButton;
