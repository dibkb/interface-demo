"use client";

import AllCases from "@/components/Logs/AllCases";
import CaseRaised from "@/components/Logs/CaseRaised";
import Discrepancy from "@/components/Logs/Discrepancy";

export default function Page({ params }: { params: { type: string } }) {
  switch (params.type) {
    case "all-mismatches":
      return <AllCases />;
    case "case-raised":
      return <CaseRaised />;
    case "reconciled":
    // return <Reimbursed />;
    case "discrepancy":
      return <Discrepancy />;
  }
}
