import { inter } from "@/components/fonts";
import Heading from "@/components/fonts/heading";
import { Logo } from "@/components/fonts/logo";
import Filter from "@/components/icons/Filter";
import { LogsSelect } from "@/components/Logs/LogsSelect";
import Sidebar from "@/components/Logs/Sidebar";
import SidebarbottomMenu from "@/components/Logs/SidebarbottomMenu";
import { cn } from "@/lib/utils";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 flex">
      <aside className="w-1/6 flex flex-col h-full">
        <div className="h-[4.25rem] border-t border-r border-b px-8">
          <Logo />
        </div>
        <div className="border-r flex-1 flex flex-col justify-between overflow-hidden">
          <Sidebar />
          <SidebarbottomMenu />
        </div>
      </aside>

      <main className="w-5/6 flex flex-col overflow-x-auto">
        <div className="h-[4.25rem] border-t border-b py-5 px-8 flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Heading text="Logs" />
            <LogsSelect />
          </span>
          <div className="flex items-center gap-4">
            <button className="border p-1 rounded-md">
              <Filter />
            </button>
            <button
              className={cn(
                "px-6 border text-sm rounded-md py-2 bg-interface-base-black text-interface-base-white",
                inter.className
              )}
            >
              Configure
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-6 overflow-x-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
