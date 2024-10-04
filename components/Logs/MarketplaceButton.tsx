import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface MarketplaceButtonProps {
  text: string;
  icon: React.ReactElement;
  href: string;
  active: boolean;
}
const MarketplaceButton = ({
  text,
  icon,
  href,
  active,
}: MarketplaceButtonProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex gap-2 px-2 py-2 items-center  rounded-md hover:bg-interface-neutrals-100 cursor-pointer",
        active && "bg-interface-palette-secondary"
      )}
    >
      {icon}
      <p className="font-semibold text-interface-base-black">{text}</p>
    </Link>
  );
};

export default MarketplaceButton;
