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

function NotificatonPage() {
  return (
    <main className="p-4 h-full flex flex-col gap-6 border overflow-y-auto">
      <div className="flex items-center justify-between">
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
          title={`Case Reimbursed: "$[total amount] reimbursed across [number] cases this week"`}
          type={"reimbursed"}
        />
        <NotificationCard
          title={`Case Raised: "[number] new cases opened this week"`}
          type={"raised"}
        />
        <NotificationCard
          title={`Action Required: "[number] cases need your attention this week"`}
          type={"action"}
        />
        <NotificationCard
          title={`Billing Updates: "$[total amount] billed for August services"`}
          type={"billing"}
        />
      </section>
    </main>
  );
}
export default NotificatonPage;
