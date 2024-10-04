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
import { Check, ChevronUp, ChevronDown, Pause } from "lucide-react";
import ArrowClockwise from "../icons/ArrowClockwise";
import Xicon from "../icons/Xicon";
import ReimbursedSidemenu from "./Sidemenu/ReimbursedSidemenu";
import ReimbursedLabel from "./Sidemenu/ReimbursedItems/ReimbursedLabel";
import ArrowLineUpRight from "../icons/ArrowLineUpRight";
import Link from "next/link";
const invoices = [
  {
    caseId: "10175687215",
    asin: "B0CLMN2PQ7",
    status: "Reimbursed",
  },
  {
    caseId: "10175681215",
    asin: "B0BLMN3PQ7",
    status: "Reimbursed",
  },
  {
    caseId: "20175687215",
    asin: "X0CLMN3PQ7",
    status: "Partially reimbursed",
  },
  {
    caseId: "10275687215",
    asin: "P0CLMN3PQ7",
    status: "Reimbursed",
  },
  {
    caseId: "10175687212",
    asin: "B0CLMN3PW7",
    status: "Partially reimbursed",
  },
  {
    caseId: "2024-09-21T23:11:09",
    asin: "10175187215",
    status: "Reimbursed",
  },
];
const Reimbursed = () => {
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
                Case ID
              </TableHead>
              <TableHead className="font-bold text-interface-base-black w-3/12">
                ASIN
              </TableHead>
              <TableHead className="font-bold text-interface-base-black w-5/12">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((data) => (
              <TableRow
                key={data.caseId}
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
                <TableCell className="w-3/12 py-4">{data.caseId}</TableCell>
                <TableCell className="w-3/12 py-4">{data.asin}</TableCell>
                <TableCell className="w-5/12 py-4">
                  <ReimbursedLabel>{data.status}</ReimbursedLabel>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {selected && (
        <div className="w-4/12 flex flex-col overflow-scroll">
          <main className="min-h-[48px] w-full flex items-center justify-between px-4">
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
            <ReimbursedSidemenu />
          </div>
        </div>
      )}
    </main>
  );
};

export default Reimbursed;
