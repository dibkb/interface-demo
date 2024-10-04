"use client";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { inter } from "@/components/fonts";
import NotificationCard from "@/components/accounts/NotificationCard";
import { useState } from "react";
import Sidebar from "@/components/icons/Sidebar";
import ArrowUpRight from "@/components/icons/ArrowUpRight";
import ChevronRight from "@/components/icons/ChevronRight";

function NotificatonPage() {
  const [selected, setSelected] = useState(false);
  return (
    <main className="flex border w-full h-full">
      <main
        className={cn(
          `${selected ? "w-7/12" : "w-full"}`,
          "py-4 px-9 flex-col gap-6 overflow-y-auto flex border-r w-full h-full"
        )}
      >
        <div className={"flex items-center justify-between"}>
          <h3 className="text-interface-base-black font-bold">
            02/09/2024 - 09/09/2024
          </h3>
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                inter.className,
                "bg-interface-base-black text-xs text-white rounded-lg px-4 py-2 flex items-center gap-3"
              )}
            >
              <p>September 2024</p>
              <ChevronDown className="text-interface-neutrals-500 size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>August 2024</DropdownMenuItem>
              <DropdownMenuItem>July 2024</DropdownMenuItem>
              <DropdownMenuItem>June 2024</DropdownMenuItem>
              <DropdownMenuItem>May 2024</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <section className="flex flex-col gap-4">
          <NotificationCard
            onClick={() => setSelected(true)}
            title={`Case Reimbursed: "$[total amount] reimbursed across [number] cases this week"`}
            type={"reimbursed"}
          />
          <NotificationCard
            onClick={() => setSelected(true)}
            title={`Case Raised: "[number] new cases opened this week"`}
            type={"raised"}
          />
          <NotificationCard
            onClick={() => setSelected(true)}
            title={`Action Required: "[number] cases need your attention this week"`}
            type={"action"}
          />
          <NotificationCard
            onClick={() => setSelected(true)}
            title={`Billing Updates: "$[total amount] billed for August services"`}
            type={"billing"}
          />
        </section>
      </main>
      {selected && (
        <div className="w-5/12 flex flex-col">
          <main className="border-b p-4 flex justify-between items-center">
            <Sidebar />
            <p className="font-bold text-interface-base-black">Case Raised</p>
            <ArrowUpRight />
          </main>
          <section className="p-4 flex flex-col">
            <div className="border rounded-md px-6 py-4 bg-interface-neutrals-50">
              <main className="flex items-center justify-between">
                <span className="flex flex-col gap-3">
                  <h3 className="text-sm font-bold">
                    New case #10207916384 opened
                  </h3>
                  <p className="text-xs font-semibold px-4 py-1 rounded-md text-[#14A341] border border-[#14A341] bg-[#CBEDD6] w-min whitespace-nowrap">
                    Storage Fee Overcharges
                  </p>
                </span>
                <ChevronRight />
              </main>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
export default NotificatonPage;
