import ButtonInfo from "@/components/dashboard/ButtonInfo";
import { AreaChartLinear } from "@/components/dashboard/graphs/AreaChart";
import { BarchartHorizontal } from "@/components/dashboard/graphs/BarchartHorizontal";
import RadialChart from "@/components/dashboard/graphs/RadialChart";
import { AreaChartStep } from "@/components/dashboard/graphs/StepChart";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="border rounded-md p-4 h-full overflow-scroll">
      <div className="flex justify-between gap-4">
        <ButtonInfo title={"Total Reimbursements"} amount={"₹23,43,521.97"} />
        <ButtonInfo title={"Cases Raised"} amount={"62,237"} />
      </div>
      <section className="mt-4 flex justify-between gap-4">
        <RadialChart />
        <BarchartHorizontal />
      </section>
      <section className="mt-4 flex justify-between gap-4">
        <AreaChartLinear />
        <AreaChartStep />
      </section>
    </div>
  );
};

export default DashboardPage;
