import { label } from "@/types/logLabel";

export const logMessages: Record<label, string> = {
  all: "all-mismatches",
  case: "case-raised",
  followed: "followed-up",
  // reimbursed: "reimbursed",
  reconciled: "reconciled",
  // action: "action-required",
  discrepancy: "discrepancy",
};
export const logMessagesDisplay: Record<label, string> = {
  all: "All Mismatches",
  case: "Case Raised",
  followed: "Followed Up",
  // reimbursed: "Reimbursed",
  reconciled: "Reconciled",
  // action: "Action Required",
  discrepancy: "Discrepancy",
};
