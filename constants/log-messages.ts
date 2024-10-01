import { label } from "@/types/logLabel";

export const logMessages: Record<label, string> = {
  all: "all-mismatches",
  raised: "case-raised",
  followed: "followed-up",
  reimbursed: "reimbursed",
  action: "action-required",
};
export const logMessagesDisplay: Record<label, string> = {
  all: "All mismatches",
  raised: "Case Raised",
  followed: "Followed Up",
  reimbursed: "Reimbursed",
  action: "Action Required",
};
