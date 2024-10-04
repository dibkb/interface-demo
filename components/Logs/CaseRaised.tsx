"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { cn } from "@/lib/utils";
import { Check, ChevronUp, ChevronDown } from "lucide-react";
import CaseRaisedSidemenu from "./Sidemenu/CaseRaisedSidemenu";
import ArrowLineUpRight from "../icons/ArrowLineUpRight";
import Link from "next/link";
const invoices = [
  {
    time: "2024-09-21T23:11:09",
    asin: "B0CLMN2PQ7",
    dispute: "Overcharge : Shipping",
  },
  {
    time: "2024-09-21T23:11:09",
    asin: "B0BLMN3PQ7",
    dispute: "Overcharge : Shipping",
  },
  {
    time: "2024-09-21T23:11:09",
    asin: "X0CLMN3PQ7",
    dispute: "Overcharge : Shipping",
  },
  {
    time: "2024-09-21T23:11:09",
    asin: "P0CLMN3PQ7",
    dispute: "Overcharge : Shipping",
  },
  {
    time: "2024-09-21T23:11:09",
    asin: "B0CLMN3PW7",
    dispute: "Overcharge : Shipping",
  },
  {
    time: "2024-09-21T23:11:09",
    asin: "B0CLMN2NQ7",
    dispute: "Overcharge : Shipping",
  },
];
const CaseRaised = () => {
  const [selected, setSelected] = useState<string | undefined>();
  const incrementSelection = () => {
    const index = invoices.findIndex((ele) => ele.asin === selected);
    if (index === invoices.length - 1) {
      setSelected(invoices[0].asin);
    } else {
      setSelected(invoices[index + 1].asin);
    }
  };
  const decrementSelection = () => {
    const index = invoices.findIndex((ele) => ele.asin === selected);
    if (index === 0) {
      setSelected(invoices[invoices.length - 1].asin);
    } else {
      setSelected(invoices[index - 1].asin);
    }
  };
  return (
    <main className="flex border w-full h-full">
      <div
        className={`${selected ? "w-8/12" : "w-full"} border-r overflow-x-auto`}
      >
        <Table>
          <TableHeader>
            <TableRow className="h-12">
              <TableHead className="font-bold text-interface-base-black w-1/12">
                <div className="w-4 h-4 border rounded-sm invisible"></div>
              </TableHead>
              <TableHead className="font-bold text-interface-base-black w-3/12">
                Date/Time
              </TableHead>
              <TableHead className="font-bold text-interface-base-black w-3/12">
                ASIN
              </TableHead>
              <TableHead className="font-bold text-interface-base-black w-5/12">
                Dispute Type
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((data) => (
              <TableRow
                key={data.time}
                className={cn(
                  "font-semibold text-[#1F2937] hover:bg-interface-neutrals-200",
                  data.asin === selected && "bg-interface-neutrals-200"
                )}
              >
                <TableCell
                  className="w-1/12 py-4"
                  onClick={() =>
                    setSelected((prev) => {
                      if (prev === data.asin) return undefined;
                      else return data.asin;
                    })
                  }
                >
                  <div
                    className={cn(
                      "w-4 h-4 border rounded-sm flex items-center justify-center bg-transparent",
                      selected === data.asin &&
                        " bg-interface-base-black border-interface-base-black"
                    )}
                  >
                    <Check
                      className={cn(
                        "invisible",
                        selected === data.asin && "text-white visible"
                      )}
                    />
                  </div>
                </TableCell>
                <TableCell className="w-3/12 py-4">{data.time}</TableCell>
                <TableCell className="w-3/12 py-4">{data.asin}</TableCell>
                <TableCell className="w-5/12 py-4">{data.dispute}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {selected && (
        <div className="w-4/12 flex flex-col">
          <main className="h-12 w-full flex items-center justify-between px-4">
            <section>
              <button
                onClick={decrementSelection}
                className="p-1 rounded-md text-interface-neutrals-600 hover:bg-interface-neutrals-50"
              >
                <ChevronUp />
              </button>
              <button
                onClick={incrementSelection}
                className="p-1 rounded-md text-interface-neutrals-600 hover:bg-interface-neutrals-50"
              >
                <ChevronDown />
              </button>
            </section>
            {selected ? (
              <p className="text-interface-neutrals-700 text-sm font-semibold">
                #{selected}
              </p>
            ) : (
              ""
            )}
            <Link
              href={`/home/detailed/${selected}`}
              onClick={() => setSelected(undefined)}
              className="p-1 rounded-md text-interface-neutrals-600 hover:bg-interface-neutrals-50"
            >
              <ArrowLineUpRight />
            </Link>
          </main>
          <div className="border-t w-full flex-1 p-4 text-xs font-semibold">
            <main className="flex flex-col gap-3">
              <CaseRaisedSidemenu />
            </main>
          </div>
        </div>
      )}
    </main>
  );
};

export default CaseRaised;
