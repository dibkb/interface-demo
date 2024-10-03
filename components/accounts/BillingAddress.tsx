import React, { useEffect, useState } from "react";
import CardLayout from "./CardLayout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { inter } from "../fonts";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import ArrowdownTray from "../icons/ArrowdownTray";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
const invoices = [
  {
    invoice: "INV001",
    date: "October 1, 2024",
    description: "Invoice for September 2024",
    totalAmount: "₹250.00",
    link: "invoice",
  },
  {
    invoice: "INV001",
    date: "October 1, 2024",
    description: "Invoice for September 2024",
    totalAmount: "₹250.00",
    link: "invoice",
  },
  {
    invoice: "INV001",
    date: "October 1, 2024",
    description: "Invoice for September 2024",
    totalAmount: "₹250.00",
    link: "invoice",
  },
  {
    invoice: "INV001",
    date: "October 1, 2024",
    description: "Invoice for September 2024",
    totalAmount: "₹1024.00",
    link: "invoice",
  },
  {
    invoice: "INV001",
    date: "August 1, 2024",
    description: "Invoice for September 2024",
    totalAmount: "₹1024.00",
    link: "invoice",
  },
  {
    invoice: "INV001",
    date: "July 1, 2024",
    description: "Invoice for June 2024",
    totalAmount: "₹1024.00",
    link: "invoice",
  },
  {
    invoice: "INV001",
    date: "July 1, 2024",
    description: "Invoice for May 2024",
    totalAmount: "₹1024.00",
    link: "invoice",
  },
];
export const BillingAddress = () => {
  const [isClientSide, setIsClientSide] = useState<boolean>(false);
  useEffect(() => {
    setIsClientSide(true);
  }, []);
  if (!isClientSide) return null;
  const dropdownMenu = (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          inter.className,
          "bg-interface-base-black text-xs text-white rounded-lg px-4 py-2 flex items-center gap-3"
        )}
      >
        <p>2024</p>
        <ChevronDown className="text-interface-neutrals-500 size-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>2023</DropdownMenuItem>
        <DropdownMenuItem>2022</DropdownMenuItem>
        <DropdownMenuItem>2021</DropdownMenuItem>
        <DropdownMenuItem>2020</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
  const pagination = (
    <Pagination className="">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="bg-interface-neutrals-100">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
  return (
    <CardLayout text="Billing History" asideNode={dropdownMenu}>
      <main>
        <Table>
          <TableHeader>
            <TableRow className="font-semibold text-xs text-interface-neutrals-600">
              <TableHead className="w-[100px]">Billing ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="">Invoice</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow
                key={invoice.invoice}
                className="font-semibold text-interface-neutrals-900 text-xs"
              >
                <TableCell className="">{invoice.invoice}</TableCell>
                <TableCell>{invoice.date}</TableCell>
                <TableCell>{invoice.description}</TableCell>
                <TableCell className="">{invoice.totalAmount}</TableCell>
                <TableCell className="w-full flex items-center gap-2">
                  <ArrowdownTray className="size-4" />
                  <p>PDF</p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-6 w-min ml-auto">{pagination}</div>
      </main>
    </CardLayout>
  );
};
