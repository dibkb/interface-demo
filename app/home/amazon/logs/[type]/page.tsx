import ArrowClockwise from "@/components/icons/ArrowClockwise";
import ChevronDown from "@/components/icons/ChevronDown";
import ChevronUp from "@/components/icons/ChevronUp";
import Pause from "@/components/icons/Pause";
import Xicon from "@/components/icons/Xicon";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    time: "2024-09-21T23:11:09",
    asin: "B0CLMN3PQ7",
    dispute: "Overcharge : Shipping",
  },
  {
    time: "2024-09-21T23:11:09",
    asin: "B0CLMN3PQ7",
    dispute: "Overcharge : Shipping",
  },
  {
    time: "2024-09-21T23:11:09",
    asin: "B0CLMN3PQ7",
    dispute: "Overcharge : Shipping",
  },
  {
    time: "2024-09-21T23:11:09",
    asin: "B0CLMN3PQ7",
    dispute: "Overcharge : Shipping",
  },
  {
    time: "2024-09-21T23:11:09",
    asin: "B0CLMN3PQ7",
    dispute: "Overcharge : Shipping",
  },
  {
    time: "2024-09-21T23:11:09",
    asin: "B0CLMN3PQ7",
    dispute: "Overcharge : Shipping",
  },
];
export default function Page({ params }: { params: { type: string } }) {
  return (
    <main className="flex border w-full h-full">
      <div className="w-8/12 border-r overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="h-12">
              <TableHead className="font-bold text-interface-base-black w-1/3">
                Date/Time
              </TableHead>
              <TableHead className="font-bold text-interface-base-black w-1/3">
                ASIN
              </TableHead>
              <TableHead className="font-bold text-interface-base-black w-1/3">
                Dispute Type
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((data) => (
              <TableRow
                key={data.time}
                className="font-semibold text-[#1F2937]"
              >
                <TableCell className="w-1/3 py-4">{data.time}</TableCell>
                <TableCell className="w-1/3 py-4">{data.asin}</TableCell>
                <TableCell className="w-1/3 py-4">{data.dispute}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="w-4/12 flex flex-col">
        <main className="h-12 w-full flex items-center justify-between px-4">
          <section>
            <button className="p-1 rounded-md text-interface-neutrals-600 hover:bg-interface-neutrals-50">
              <ChevronUp />
            </button>
            <button className="p-1 rounded-md text-interface-neutrals-600 hover:bg-interface-neutrals-50">
              <ChevronDown />
            </button>
          </section>
          <p className="text-interface-neutrals-700 text-sm font-semibold">
            #B0CLMN3PQ7
          </p>
          <button className="p-1 rounded-md text-interface-neutrals-600 hover:bg-interface-neutrals-50">
            <Xicon />
          </button>
        </main>
        <div className="border-t w-full flex-1"></div>
        <footer className="flex items-center justify-between p-4">
          <button className="p-1 hover:bg-interface-neutrals-50">
            <ArrowClockwise />
          </button>
          <button className="p-1 hover:bg-interface-neutrals-50">
            <Pause />
          </button>
        </footer>
      </div>
    </main>
  );
}
