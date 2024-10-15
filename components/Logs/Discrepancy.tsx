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
import ArrowLineUpRight from "../icons/ArrowLineUpRight";
import CaseRaisedSidemenu from "./Sidemenu/CaseRaisedSidemenu";
import useReportStore from "@/app/src/stores/reportStore";
import Link from "next/link";

const Discrepancy = () => {
  const { removalOrders } = useReportStore();
  const [selected, setSelected] = useState<string | undefined>();
  const incrementSelection = () => {
    const index = removalOrders.findIndex((ele) => ele.order_id === selected);
    if (index === removalOrders.length - 1) {
      setSelected(removalOrders[0].order_id);
    } else {
      setSelected(removalOrders[index + 1].order_id);
    }
  };
  const decrementSelection = () => {
    const index = removalOrders.findIndex((ele) => ele.order_id === selected);
    if (index === 0) {
      setSelected(removalOrders[removalOrders.length - 1].order_id);
    } else {
      setSelected(removalOrders[index - 1].order_id);
    }
  };
  // TODO : filter only the discrepancies
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
            {removalOrders.map((data) => (
              <TableRow
                key={data.id}
                className={cn(
                  "font-semibold text-[#1F2937] hover:bg-interface-neutrals-200",
                  data.order_id === selected && "bg-interface-neutrals-200"
                )}
              >
                <TableCell
                  className="w-1/12 py-4"
                  onClick={() =>
                    setSelected((prev) => {
                      if (prev === data.order_id) return undefined;
                      else return data.order_id;
                    })
                  }
                >
                  <div
                    className={cn(
                      "w-4 h-4 border rounded-sm flex items-center justify-center bg-transparent",
                      selected === data.order_id &&
                        " bg-interface-base-black border-interface-base-black"
                    )}
                  >
                    <Check
                      className={cn(
                        "invisible",
                        selected === data.order_id && "text-white visible"
                      )}
                    />
                  </div>
                </TableCell>
                <TableCell className="w-3/12 py-4">
                  {data.order_request_date}
                </TableCell>
                <TableCell className="w-3/12 py-4">{data.order_id}</TableCell>
                <TableCell className="w-5/12 py-4">
                  {data.order_disposition}
                </TableCell>
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

export default Discrepancy;
