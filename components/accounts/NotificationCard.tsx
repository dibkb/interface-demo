/* eslint-disable @next/next/no-img-element */
import React from "react";
import reimbursed from "../../img/reimbursed.png";
import raised from "../../img/raised.png";
import action from "../../img/action.png";
import billing from "../../img/billing.png";
import { ChevronRight } from "lucide-react";
interface NotificationCardProps {
  title: string;
  type: "reimbursed" | "raised" | "action" | "billing";
}
const NotificationCard = ({ title, type }: NotificationCardProps) => {
  let icon;
  switch (type) {
    case "reimbursed":
      icon = <img src={reimbursed.src} alt="" />;
      break;
    case "raised":
      icon = <img src={raised.src} alt="" />;
      break;
    case "action":
      icon = <img src={action.src} alt="" />;
      break;
    case "billing":
      icon = <img src={billing.src} alt="" />;
      break;
  }
  return (
    <div className="flex items-center justify-between p-4 bg-interface-neutrals-50 border rounded-md cursor-pointer hover:bg-interface-neutrals-100">
      <main className="flex items-center gap-6">
        {icon}
        <span>
          <h3 className="font-bold">{title}</h3>
          <p className="font-semibold text-interface-neutrals-500">
            View details
          </p>
        </span>
      </main>
      <ChevronRight className="size-5" />
    </div>
  );
};

export default NotificationCard;
