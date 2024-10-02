import Dots from "@/components/icons/Dots";
import Expand from "@/components/icons/Expand";
import InfoCircle from "@/components/icons/InfoCircle";
import Pencil from "@/components/icons/Pencil";
import React from "react";
interface ChartLayoutProps {
  children: React.ReactNode;
  title: string;
}
const ChartLayout = ({ children, title }: ChartLayoutProps) => {
  return (
    <div className="flex-1 bg-interface-neutrals-50 py-4 px-6 border rounded-md">
      <section className="flex items-center justify-between">
        <span className="flex items-center gap-2">
          <p className="text-lg font-bold">{title}</p>
          <InfoCircle />
        </span>
        <span className="rounded-xl border bg-interface-base-white flex items-center gap-2 p-1">
          <button>
            <Expand />
          </button>
          <button>
            <Pencil />
          </button>
          <button>
            <Dots />
          </button>
        </span>
      </section>
      {children}
    </div>
  );
};

export default ChartLayout;
