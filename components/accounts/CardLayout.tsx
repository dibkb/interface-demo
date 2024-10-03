import React from "react";
interface CardLayoutProps {
  children: React.ReactNode;
  text: string;
  asideNode: React.ReactNode;
}
const CardLayout = ({ children, text, asideNode }: CardLayoutProps) => {
  return (
    <div className="px-8 py-7 bg-interface-neutrals-50 border rounded-lg flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-interface-base-black">{text}</h3>
        {asideNode}
      </div>
      {children}
    </div>
  );
};

export default CardLayout;
