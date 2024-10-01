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
import { useCallback, useState } from "react";

export function LogsSelect() {
  const router = useRouter();
  const [type, setType] = useState<string>("");
  const handleValueChange = useCallback(
    (key: string) => {
      setType(key);
      router.push(
        `/home/amazon/logs/${logMessages[key as keyof typeof logMessages]}`
      );
    },
    [router]
  );

  //   const params = useParams();
  //   useEffect(() => {
  //     console.log(typeof params?.type);
  //     console.log(params?.type);
  //     if (typeof params?.type === "string" && params?.type.length) {
  //       setType(params.type);
  //     }
  //   }, [params]);

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
