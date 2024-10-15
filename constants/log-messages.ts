import { label } from "@/types/logLabel";

export const logMessages: Record<label, string> = {
  all: "all-mismatches",
  raised: "case-raised",
  followed: "followed-up",
  // reimbursed: "reimbursed",
  reconciled: "Reconciled",
  // action: "action-required",
  discrepancy: "Discrepancy",
};
export const logMessagesDisplay: Record<label, string> = {
  all: "All Mismatches",
  raised: "Case Raised",
  followed: "Followed Up",
  // reimbursed: "Reimbursed",
  reconciled: "Reconciled",
  // action: "Action Required",
  discrepancy: "Discrepancy",
};
