"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

interface LogsSelectProps {
  hrefPrefix: string;
  logMessages: Record<string, string>;
  logMessagesDisplay: Record<string, string>;
  initialLogMessage?: boolean;
}
export function SelectMenu({
  logMessages,
  hrefPrefix,
  logMessagesDisplay,
  initialLogMessage = false,
}: LogsSelectProps) {
  const router = useRouter();
  const [type, setType] = useState<string>("");
  const pathname = usePathname();
  useEffect(() => {
    const val = pathname.split("/").pop();
    if (initialLogMessage && val && val !== "logs") {
      const hyphen = val.split("-");
      if (hyphen.length > 1) {
        setType(hyphen[0]);
      } else {
        setType(val);
      }
    }
  }, [pathname, initialLogMessage]);
  const handleValueChange = useCallback(
    (key: string) => {
      setType(key);
      console.log(key);
      router.push(
        `${hrefPrefix}/${logMessages[key as keyof typeof logMessages]}`
      );
    },
    [router, logMessages, hrefPrefix]
  );
  // console.log("type", type);
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
