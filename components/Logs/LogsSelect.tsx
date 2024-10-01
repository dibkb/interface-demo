"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { logMessages, logMessagesDisplay } from "@/constants/log-messages";
import { useRouter } from "next/navigation";

export function LogsSelect() {
  const router = useRouter();

  const handleValueChange = (key: string) => {
    router.push(
      `/home/amazon/logs/${logMessages[key as keyof typeof logMessages]}`
    );
  };
  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger className="w-[150px] border-none bg-transparent shadow-none font-bold text-interface-base-black">
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
