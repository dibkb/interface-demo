import Filter from "@/components/icons/Filter";
import Heading from "../components/fonts/heading";
import { Logo } from "../components/fonts/logo";

import Sidebar from "@/components/Logs/Sidebar";
import { cn } from "@/lib/utils";
import { inter } from "@/components/fonts";
import SidebarbottomMenu from "@/components/Logs/SidebarbottomMenu";

export default function Home() {
  return (
    <div className="grid grid-cols-12 grid-rows-[auto_1fr] min-h-screen">
      <aside className="col-span-2 row-span-2 grid grid-rows-[auto_1fr]">
        <div className="h-[4.25rem] border-t border-r border-b px-8">
          <Logo />
        </div>
        <div className="border-r flex flex-col">
          <Sidebar />
          <SidebarbottomMenu />
        </div>
      </aside>

      <main className="col-span-10 row-span-2 grid grid-rows-[auto_1fr]">
        <div className="h-[4.25rem] border-t border-b py-5 px-8 flex items-center justify-between">
          <Heading text="Logs" />
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
        <div className="p-6 overflow-y-auto h-full">
          Main Row 2 (Full height)
        </div>
      </main>
    </div>
  );
}
