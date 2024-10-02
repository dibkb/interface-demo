import ButtonInfo from "@/components/dashboard/ButtonInfo";
import RadialChart from "@/components/dashboard/graphs/RadialChart";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="border rounded-md p-4 h-full overflow-scroll">
      <div className="flex justify-between gap-4">
        <ButtonInfo title={"Total Reimbursements"} amount={"23,43,521.97"} />
        <ButtonInfo title={"Cases Raised"} amount={"62,237"} />
      </div>
      <section className="mt-4 flex justify-between gap-4">
        <RadialChart />
        <RadialChart />
      </section>
    </div>
  );
};

export default DashboardPage;
