"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

interface LogsSelectProps {
  hrefPrefix: string;
  logMessages: Record<string, string>;
  logMessagesDisplay: Record<string, string>;
}
export function SelectMenu({
  logMessages,
  hrefPrefix,
  logMessagesDisplay,
}: LogsSelectProps) {
  const router = useRouter();
  const [type, setType] = useState<string>("");
  const handleValueChange = useCallback(
    (key: string) => {
      setType(key);
      router.push(
        `${hrefPrefix}/${logMessages[key as keyof typeof logMessages]}`
      );
    },
    [router, logMessages, hrefPrefix]
  );

  return (
    <Select onValueChange={handleValueChange} value={type}>
      <SelectTrigger className="w-[160px] border-none bg-transparent shadow-none font-bold text-interface-base-black">
        <SelectValue placeholder="Select a type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Object.entries(logMessages).map(([key]) => {
            return (
              <SelectItem value={key} key={key} className="text-sm font-medium">
                {logMessagesDisplay[key as keyof typeof logMessagesDisplay]}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
